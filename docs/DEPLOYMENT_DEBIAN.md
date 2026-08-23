# Debian 快速部署

目标：使用现有的 `root` SSH 登录，把项目部署到阿里云 Debian 服务器，域名为 `py.jserm.com`。

部署后访问：

```text
https://py.jserm.com/xuexi_py/
```

本文只保留实际部署需要的步骤：不创建其他用户，全程使用 `root`，不使用 `sudo`。

## 1. 本地上传代码和前端

以下命令在本地项目根目录执行：

```bash
cd /Users/zhouwen/xuexi_py_project

ssh aliyun 'mkdir -p /srv/xuexi_py_project /var/www/xuexi_py/xuexi_py'

rsync -az --delete \
  --exclude '.git' \
  --exclude '.env' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  ./ aliyun:/srv/xuexi_py_project/
```

构建并上传前端：

```bash
cd /Users/zhouwen/xuexi_py_project/xuexi_py_frontend

cat > .env.production <<'EOF'
VITE_API_BASE_URL=/api/v1
EOF

npm ci
npm run build

rsync -az --delete dist/ aliyun:/var/www/xuexi_py/xuexi_py/
```

## 2. 登录服务器

```bash
ssh aliyun
```

确认是 root：

```bash
whoami
```

应该输出：

```text
root
```

后面所有命令都在服务器执行。

## 3. 安装系统软件

```bash
apt update
apt install -y ca-certificates curl nginx openssl
```

使用 Docker 官方快捷脚本安装 Docker：

```bash
curl -fsSL https://get.docker.com -o /tmp/get-docker.sh
sh /tmp/get-docker.sh
rm -f /tmp/get-docker.sh

systemctl enable --now docker
docker compose version
```

安装 Miniconda。下面的命令会自动区分常见的 x86_64 和 ARM64 服务器：

```bash
case "$(uname -m)" in
  aarch64|arm64)
    MINICONDA_INSTALLER=Miniconda3-latest-Linux-aarch64.sh
    ;;
  *)
    MINICONDA_INSTALLER=Miniconda3-latest-Linux-x86_64.sh
    ;;
esac

curl -fsSL \
  "https://repo.anaconda.com/miniconda/${MINICONDA_INSTALLER}" \
  -o /tmp/miniconda.sh

bash /tmp/miniconda.sh -b -p /root/miniconda3
rm -f /tmp/miniconda.sh

source /root/miniconda3/etc/profile.d/conda.sh
conda config --set auto_activate_base false
conda create -n xuexi_py_backend python=3.12 -y
```

安装后端依赖：

```bash
cd /srv/xuexi_py_project/xuexi_py_backend
/root/miniconda3/bin/conda run -n xuexi_py_backend \
  python -m pip install .
```

## 4. 配置数据库和后端

生成随机密码和密钥：

```bash
POSTGRES_PASSWORD=$(openssl rand -hex 24)
AUTH_SECRET_KEY=$(openssl rand -hex 48)
umask 077
```

创建 Docker Compose 使用的环境变量：

```bash
cat > /srv/xuexi_py_project/.env <<EOF
POSTGRES_DB=xuexi_py
POSTGRES_USER=xuexi_py
POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
EOF
```

创建 FastAPI 使用的环境变量：

```bash
cat > /srv/xuexi_py_project/xuexi_py_backend/.env <<EOF
APP_ENV=production
DATABASE_URL=postgresql+psycopg://xuexi_py:${POSTGRES_PASSWORD}@127.0.0.1:5432/xuexi_py
AUTH_SECRET_KEY=${AUTH_SECRET_KEY}
ACCESS_TOKEN_MINUTES=60
FRONTEND_ORIGINS=["https://py.jserm.com"]
CODE_EXECUTION_ENABLED=false
LAB_ENVIRONMENTS_ENABLED=false
EOF
```

启动 PostgreSQL：

```bash
cd /srv/xuexi_py_project
docker compose up -d postgres
docker compose ps
```

执行数据库迁移并导入初始数据：

```bash
cd /srv/xuexi_py_project/xuexi_py_backend

/root/miniconda3/bin/conda run -n xuexi_py_backend alembic upgrade head
/root/miniconda3/bin/conda run -n xuexi_py_backend python -m app.scripts.seed
```

## 5. 启动 FastAPI

创建 systemd 服务：

```bash
cat > /etc/systemd/system/xuexi-py-api.service <<'EOF'
[Unit]
Description=PyPath FastAPI
After=network-online.target docker.service
Requires=docker.service

[Service]
User=root
WorkingDirectory=/srv/xuexi_py_project/xuexi_py_backend
Environment=PYTHONUNBUFFERED=1
ExecStartPre=/usr/bin/docker compose -f /srv/xuexi_py_project/docker-compose.yml up -d postgres
ExecStart=/root/miniconda3/envs/xuexi_py_backend/bin/uvicorn app.main:app --host 127.0.0.1 --port 8011 --workers 1 --proxy-headers --forwarded-allow-ips=127.0.0.1
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now xuexi-py-api
systemctl status xuexi-py-api --no-pager
```

测试后端：

```bash
curl --fail http://127.0.0.1:8011/api/v1/health
```

## 6. 配置 Nginx

```bash
cat > /etc/nginx/sites-available/xuexi-py <<'EOF'
server {
    listen 80;
    server_name py.jserm.com;

    root /var/www/xuexi_py;
    index index.html;

    location = / {
        return 302 /xuexi_py/;
    }

    location /xuexi_py/ {
        try_files $uri $uri/ /xuexi_py/index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8011;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -sf /etc/nginx/sites-available/xuexi-py /etc/nginx/sites-enabled/xuexi-py
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable --now nginx
systemctl reload nginx
```

在阿里云安全组中开放 TCP 端口 `80`，先确认 HTTP 可以访问：

```text
http://py.jserm.com/xuexi_py/
```

HTTP 正常后继续配置 HTTPS。

## 7. 配置 HTTPS

确认 `py.jserm.com` 的 A 记录已经指向当前服务器，并在阿里云安全组中开放 TCP 端口 `443`，然后执行：

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d py.jserm.com
```

Certbot 会自动修改 Nginx 配置并启用 HTTPS。最后访问：

```text
https://py.jserm.com/xuexi_py/
```

检查证书自动续期：

```bash
certbot renew --dry-run
```

## 8. 以后更新代码

在本地重新上传代码和前端：

```bash
cd /Users/zhouwen/xuexi_py_project

rsync -az --delete \
  --exclude '.git' \
  --exclude '.env' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  ./ aliyun:/srv/xuexi_py_project/

cd xuexi_py_frontend
npm ci
npm run build
rsync -az --delete dist/ aliyun:/var/www/xuexi_py/xuexi_py/
```

然后登录服务器更新后端：

```bash
ssh aliyun
cd /srv/xuexi_py_project/xuexi_py_backend

/root/miniconda3/bin/conda run -n xuexi_py_backend python -m pip install .
/root/miniconda3/bin/conda run -n xuexi_py_backend alembic upgrade head
/root/miniconda3/bin/conda run -n xuexi_py_backend python -m app.scripts.seed

systemctl restart xuexi-py-api
curl --fail http://127.0.0.1:8011/api/v1/health
```

## 出问题时只看这几个命令

```bash
systemctl status xuexi-py-api --no-pager
journalctl -u xuexi-py-api -n 100 --no-pager
docker compose -f /srv/xuexi_py_project/docker-compose.yml ps
docker compose -f /srv/xuexi_py_project/docker-compose.yml logs --tail=100 postgres
nginx -t
tail -n 100 /var/log/nginx/error.log
```

官方安装说明：

- [Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)
- [Miniconda Linux 安装](https://www.anaconda.com/docs/getting-started/miniconda/install/linux-install)
