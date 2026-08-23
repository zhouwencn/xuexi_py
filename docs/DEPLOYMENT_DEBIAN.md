# PyPath Debian 生产上线手册

本文档适用于一台全新的 Debian 13 服务器，目标配置约为 2 核 CPU、2GB 内存。

部署架构：

```text
Internet
   │
   ▼
Nginx :80/:443
   ├── /xuexi_py/  → 前端静态文件
   └── /api/v1/    → FastAPI 127.0.0.1:8011
                           │
                           ▼
                 PostgreSQL 127.0.0.1:5432
                       Docker Compose
```

当前阶段不把 FastAPI 和前端强行容器化：

- Nginx 由 Debian 管理。
- FastAPI 使用项目规定的 Conda Python 3.12 环境，通过 systemd 管理。
- PostgreSQL 使用 Docker Compose。
- 前端在本地或 CI 构建，只向服务器发布 `dist/`。

官方参考：

- [Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)
- [Miniconda Linux 安装](https://www.anaconda.com/docs/getting-started/miniconda/install/linux-install)
- [Debian 安全更新](https://www.debian.org/security/)
- [Certbot + Nginx](https://certbot.eff.org/instructions)

---

## 1. 上线前必须准备

开始操作服务器之前，先准备以下信息。

### 1.1 服务器信息

- 公网 IPv4：`<SERVER_IP>`
- Debian 版本：建议 Debian 13
- CPU 架构：通常为 `amd64/x86_64`，ARM 服务器则为 `arm64/aarch64`
- 当前 SSH 用户和登录方式
- 云厂商安全组管理入口

登录后检查：

```bash
cat /etc/os-release
uname -m
free -h
df -h
```

### 1.2 域名

准备一个域名或子域名，例如：

```text
python.example.com
```

需要添加：

```text
A     python.example.com     <SERVER_IP>
```

如果服务器没有配置 IPv6，不要添加无效的 AAAA 记录。

DNS 生效检查：

```bash
dig +short python.example.com
```

必须等它返回服务器公网 IP 后再申请 HTTPS 证书。

### 1.3 Git 仓库访问

选择一种发布方式：

1. 公开仓库：服务器直接 `git clone`。
2. 私有仓库：为服务器创建只读 Deploy Key。
3. 不让服务器访问 Git：本地使用 `rsync` 上传代码。

不要把个人 GitHub 密码或长期 Token 写进服务器脚本。

### 1.4 生产秘密

需要两个不同的随机值：

```bash
openssl rand -hex 24   # PostgreSQL 密码
openssl rand -hex 48   # AUTH_SECRET_KEY
```

不要：

- 把真实密码提交到 Git。
- 把真实 `.env` 发到聊天、工单或截图中。
- 复用 SSH 密码、数据库密码和 JWT 密钥。
- 使用文档里的示例值上线。

### 1.5 备份位置

至少确定一个不在当前服务器系统盘上的备份位置：

- 云对象存储。
- 另一台服务器。
- 云硬盘快照 + 定期 `pg_dump`。

只有服务器本机的一份备份不算可靠备份。

---

## 2. 首次登录与系统初始化

以下命令假设当前账号拥有 sudo 权限。

### 2.1 更新系统

```bash
sudo apt update
sudo apt full-upgrade -y
sudo apt install -y \
  ca-certificates \
  curl \
  git \
  gnupg \
  nginx \
  openssl \
  rsync \
  ufw \
  fail2ban \
  unattended-upgrades \
  build-essential
```

如果升级了内核：

```bash
sudo reboot
```

重连后检查：

```bash
systemctl --failed
```

### 2.2 创建部署用户

如果云厂商已经提供普通 sudo 用户，可以复用；否则创建：

```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```

将你的 SSH 公钥安装到：

```text
/home/deploy/.ssh/authorized_keys
```

确认新用户可以用密钥登录后，再考虑关闭 root 和密码登录。不要在没有第二个可用 SSH 会话时修改 SSH 配置。

建议最终设置：

```text
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

修改后先验证配置：

```bash
sudo sshd -t
sudo systemctl reload ssh
```

保持旧 SSH 会话不退出，另开一个终端验证新登录。

### 2.3 防火墙和云安全组

云厂商安全组只开放：

- TCP 22：SSH，最好限制为自己的固定 IP。
- TCP 80：HTTP。
- TCP 443：HTTPS。

服务器 UFW：

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status verbose
```

不要开放：

- 5432 PostgreSQL
- 8011 FastAPI
- Docker daemon 2375/2376

Docker 官方提醒：公开映射的容器端口可能绕过 UFW。当前项目把 PostgreSQL 绑定在 `127.0.0.1`，不要改成 `0.0.0.0:5432`。

### 2.4 配置 Swap

2GB 内存服务器建议配置 2GB Swap，主要防止构建、迁移或短时请求峰值直接触发 OOM。

先检查：

```bash
swapon --show
```

仅在当前没有 Swap 时执行：

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-xuexi-py.conf
sudo sysctl --system
```

检查：

```bash
free -h
swapon --show
```

Swap 只是安全缓冲，不应长期高频使用。

### 2.5 自动安全更新

Debian 官方推荐使用 `unattended-upgrades` 安装安全更新。

启用：

```bash
sudo dpkg-reconfigure --priority=low unattended-upgrades
systemctl status unattended-upgrades
```

内核和关键组件更新后仍需要安排维护窗口重启。

---

## 3. 安装 Docker Engine

不要使用 Debian 自带的旧 `docker.io` 与 Docker 官方包混装。

按照 Docker 官方 Debian 仓库安装：

```bash
sudo apt remove -y docker.io docker-compose docker-doc podman-docker containerd runc || true

sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg \
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

sudo tee /etc/apt/sources.list.d/docker.sources >/dev/null <<EOF
Types: deb
URIs: https://download.docker.com/linux/debian
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
sudo apt install -y \
  docker-ce \
  docker-ce-cli \
  containerd.io \
  docker-buildx-plugin \
  docker-compose-plugin
```

检查：

```bash
sudo systemctl enable --now docker
sudo docker version
sudo docker compose version
sudo docker run --rm hello-world
```

不要为了省略 sudo 随意把 Web 服务用户加入 `docker` 组。`docker` 组基本等同于 root 权限。

当前生产建议保持：

```text
CODE_EXECUTION_ENABLED=false
LAB_ENVIRONMENTS_ENABLED=false
```

因此 FastAPI 服务本身不需要访问 Docker Socket。

---

## 4. 上传项目代码

建议目录：

```text
/srv/xuexi_py_project
```

创建目录：

```bash
sudo mkdir -p /srv/xuexi_py_project
sudo chown -R deploy:deploy /srv/xuexi_py_project
```

### 4.1 Git 部署

切换到 deploy 用户：

```bash
sudo -iu deploy
```

克隆：

```bash
git clone <REPOSITORY_URL> /srv/xuexi_py_project
cd /srv/xuexi_py_project
git status
git log -1 --oneline
```

使用明确分支或 tag，不要在生产服务器直接开发。

### 4.2 rsync 部署

在本地项目根目录执行：

```bash
rsync -az --delete \
  --exclude '.git' \
  --exclude '.env' \
  --exclude 'node_modules' \
  --exclude 'dist' \
  ./ deploy@<SERVER_IP>:/srv/xuexi_py_project/
```

首次上线更推荐 Git；前端构建产物可以单独 rsync。

---

## 5. 安装 Conda 与后端依赖

所有 Conda 操作使用 deploy 用户，不要用 root 安装到 `/root`。

### 5.1 下载 Miniconda

先确认架构：

```bash
uname -m
```

amd64/x86_64：

```bash
cd /tmp
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

ARM64 使用对应的 `Linux-aarch64.sh` 安装器。

建议安装到：

```text
/home/deploy/miniconda3
```

安装完成：

```bash
source /home/deploy/miniconda3/etc/profile.d/conda.sh
conda config --set auto_activate_base false
conda create -n xuexi_py_backend python=3.12 -y
```

### 5.2 安装项目依赖

```bash
cd /srv/xuexi_py_project/xuexi_py_backend
conda run -n xuexi_py_backend python -m pip install --upgrade pip
conda run -n xuexi_py_backend python -m pip install .
conda run -n xuexi_py_backend python -m pip check
```

生产环境不需要安装 `[dev]` 测试依赖。如果要在上线前运行测试，可以临时安装：

```bash
conda run -n xuexi_py_backend python -m pip install '.[dev]'
conda run -n xuexi_py_backend python -m pytest -q
```

---

## 6. 配置生产环境变量

项目有两份 `.env`，用途不同：

```text
/srv/xuexi_py_project/.env                  # Docker Compose / PostgreSQL
/srv/xuexi_py_project/xuexi_py_backend/.env # FastAPI
```

两者的 PostgreSQL 用户、数据库名和密码必须一致。

### 6.1 根目录 `.env`

```bash
cd /srv/xuexi_py_project
umask 077
cat > .env <<'EOF'
POSTGRES_DB=xuexi_py
POSTGRES_USER=xuexi_py
POSTGRES_PASSWORD=<POSTGRES_PASSWORD_HEX>
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
EOF
chmod 600 .env
```

### 6.2 后端 `.env`

```bash
cd /srv/xuexi_py_project/xuexi_py_backend
umask 077
cat > .env <<'EOF'
APP_ENV=production
DATABASE_URL=postgresql+psycopg://xuexi_py:<POSTGRES_PASSWORD_HEX>@127.0.0.1:5432/xuexi_py
AUTH_SECRET_KEY=<AUTH_SECRET_KEY_HEX>
ACCESS_TOKEN_MINUTES=60
FRONTEND_ORIGINS=["https://<DOMAIN>"]

CODE_EXECUTION_ENABLED=false
CODE_RUNNER_IMAGE=python:3.12-alpine
CODE_EXECUTION_TIMEOUT_SECONDS=5

LAB_ENVIRONMENTS_ENABLED=false
LAB_RUNTIME_IMAGE=xuexi-py-lab:latest
LAB_ENVIRONMENT_TTL_MINUTES=60
EOF
chmod 600 .env
```

因为建议使用 hex 密码，`DATABASE_URL` 不需要额外 URL 编码。如果自行使用包含 `@:/?#` 等字符的密码，必须先进行 URL 编码。

验证配置，不输出秘密：

```bash
conda run -n xuexi_py_backend python -c \
  "from app.core.config import get_settings; s=get_settings(); print(s.app_env, s.app_name)"
```

预期：

```text
production Python 学习平台 API
```

---

## 7. 启动 PostgreSQL

```bash
cd /srv/xuexi_py_project
sudo docker compose config
sudo docker compose up -d postgres
sudo docker compose ps
```

等待状态为 healthy。

检查数据库，但不要让命令输出密码：

```bash
sudo docker compose exec postgres pg_isready -U xuexi_py -d xuexi_py
```

确认端口只监听本机：

```bash
ss -lntp | grep 5432
```

应看到 `127.0.0.1:5432`，不应看到 `0.0.0.0:5432`。

---

## 8. 执行 Migration 和 Seed

先备份，再执行任何后续结构更新。

首次上线：

```bash
cd /srv/xuexi_py_project/xuexi_py_backend
conda run -n xuexi_py_backend alembic upgrade head
conda run -n xuexi_py_backend alembic current
conda run -n xuexi_py_backend alembic check
conda run -n xuexi_py_backend python -m app.scripts.seed
```

Seed 可以重复执行，不应无限创建重复数据。

再次验证：

```bash
conda run -n xuexi_py_backend python -m app.scripts.seed
```

检查表数量：

```bash
cd /srv/xuexi_py_project
sudo docker compose exec -T postgres \
  psql -U xuexi_py -d xuexi_py -c '\dt'
```

---

## 9. 配置 FastAPI systemd 服务

创建 `/etc/systemd/system/xuexi-py-api.service`：

```ini
[Unit]
Description=PyPath FastAPI API
After=network-online.target docker.service
Wants=network-online.target
Requires=docker.service

[Service]
Type=simple
User=deploy
Group=deploy
WorkingDirectory=/srv/xuexi_py_project/xuexi_py_backend
Environment=PYTHONUNBUFFERED=1
Environment=PATH=/home/deploy/miniconda3/envs/xuexi_py_backend/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
ExecStart=/home/deploy/miniconda3/envs/xuexi_py_backend/bin/uvicorn app.main:app --host 127.0.0.1 --port 8011 --workers 1 --proxy-headers --forwarded-allow-ips=127.0.0.1
Restart=on-failure
RestartSec=5
TimeoutStopSec=30
NoNewPrivileges=true
PrivateTmp=true
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
```

2GB 服务器保持单 worker。多个 worker 会复制 Python 进程和应用内存。

启用：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now xuexi-py-api
sudo systemctl status xuexi-py-api --no-pager
```

检查：

```bash
curl --fail http://127.0.0.1:8011/api/v1/health
```

日志：

```bash
sudo journalctl -u xuexi-py-api -n 100 --no-pager
sudo journalctl -u xuexi-py-api -f
```

---

## 10. 构建和发布前端

前端生产路径固定为：

```text
/xuexi_py/
```

API 使用同域：

```text
/api/v1
```

### 10.1 推荐：本地构建

在本地项目目录：

```bash
cd xuexi_py_frontend
cp .env.example .env.production
npm ci
npm run lint
npm run build
```

`.env.production`：

```text
VITE_API_BASE_URL=/api/v1
```

上传：

```bash
rsync -az --delete \
  dist/ \
  deploy@<SERVER_IP>:/tmp/xuexi-py-dist/
```

服务器：

```bash
sudo mkdir -p /var/www/xuexi_py/xuexi_py
sudo rsync -a --delete /tmp/xuexi-py-dist/ /var/www/xuexi_py/xuexi_py/
sudo chown -R root:root /var/www/xuexi_py
sudo find /var/www/xuexi_py -type d -exec chmod 755 {} \;
sudo find /var/www/xuexi_py -type f -exec chmod 644 {} \;
```

不建议长期在 2GB 服务器上运行 Vite 开发服务器。

### 10.2 服务器构建（备选）

只有安装了合适 Node.js 版本且 Swap 正常时再使用：

```bash
cd /srv/xuexi_py_project/xuexi_py_frontend
npm ci
npm run lint
npm run build
sudo rsync -a --delete dist/ /var/www/xuexi_py/xuexi_py/
```

构建完成后不需要保持 Node 进程运行。

---

## 11. 配置 Nginx

创建 `/etc/nginx/sites-available/xuexi-py`：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name <DOMAIN>;

    root /var/www/xuexi_py;
    index index.html;

    client_max_body_size 1m;

    location = / {
        return 302 /xuexi_py/;
    }

    location /xuexi_py/ {
        try_files $uri $uri/ /xuexi_py/index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8011;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 5s;
        proxy_read_timeout 30s;
        proxy_send_timeout 30s;
    }

    location = /healthz {
        proxy_pass http://127.0.0.1:8011/api/v1/health;
        proxy_set_header Host $host;
    }

    location ~* ^/xuexi_py/assets/.*\.(js|css|png|jpg|jpeg|gif|svg|webp|woff2?)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

启用：

```bash
sudo ln -s /etc/nginx/sites-available/xuexi-py /etc/nginx/sites-enabled/xuexi-py
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

HTTP 检查：

```bash
curl -I http://<DOMAIN>/xuexi_py/
curl --fail http://<DOMAIN>/api/v1/health
```

---

## 12. 配置 HTTPS

必须在以下条件满足后执行：

- DNS 已指向当前服务器。
- 80、443 已在安全组和 UFW 开放。
- Nginx HTTP 站点已经可以访问。

Debian 可以安装：

```bash
sudo apt install -y certbot python3-certbot-nginx
```

申请证书：

```bash
sudo certbot --nginx -d <DOMAIN>
```

测试续期：

```bash
sudo certbot renew --dry-run
systemctl list-timers | grep certbot
```

最终检查：

```bash
curl -I https://<DOMAIN>/xuexi_py/
curl --fail https://<DOMAIN>/api/v1/health
```

HTTPS 生效后，确认后端 `.env`：

```text
FRONTEND_ORIGINS=["https://<DOMAIN>"]
```

修改后：

```bash
sudo systemctl restart xuexi-py-api
```

---

## 13. 上线验收清单

### 系统

- [ ] `systemctl --failed` 没有失败服务。
- [ ] Swap 已配置。
- [ ] 只有 22、80、443 对公网开放。
- [ ] PostgreSQL 只监听 127.0.0.1。
- [ ] Docker 和 Nginx 开机自启。

### 后端

- [ ] `APP_ENV=production`。
- [ ] 使用真实随机 `AUTH_SECRET_KEY`。
- [ ] `CODE_EXECUTION_ENABLED=false`。
- [ ] `LAB_ENVIRONMENTS_ENABLED=false`。
- [ ] Alembic revision 是 head。
- [ ] `alembic check` 没有待迁移操作。
- [ ] Seed 连续执行不重复插入。
- [ ] `/api/v1/health` 返回成功。
- [ ] FastAPI 仅监听 127.0.0.1:8011。

### 前端

- [ ] `/xuexi_py/` 可以打开。
- [ ] 刷新 HashRouter 页面不会 404。
- [ ] catalog API 返回课程数据。
- [ ] 注册、登录正常。
- [ ] 登录后“我已掌握”可以保存并在刷新后恢复。
- [ ] 普通题由后端判题，不在 catalog 暴露答案。
- [ ] 浏览器控制台没有跨域或 mixed-content 错误。

### HTTPS

- [ ] HTTP 自动跳转 HTTPS。
- [ ] 证书域名正确。
- [ ] `certbot renew --dry-run` 成功。

---

## 14. 日常发布流程

### 14.1 发布前

本地执行：

```bash
git status
cd xuexi_py_backend
conda run -n xuexi_py_backend python -m pytest -q
conda run -n xuexi_py_backend alembic check
cd ../xuexi_py_frontend
npm ci
npm run lint
npm run build
```

为当前稳定版本打 tag：

```bash
git tag -a v0.1.0 -m 'production release v0.1.0'
git push origin v0.1.0
```

### 14.2 数据库备份

服务器：

```bash
sudo mkdir -p /var/backups/xuexi_py
cd /srv/xuexi_py_project
set -a
. ./.env
set +a
sudo docker compose exec -T postgres \
  pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" \
  | gzip > "/var/backups/xuexi_py/xuexi_py_$(date +%F_%H%M%S).sql.gz"
```

检查备份不是空文件：

```bash
ls -lh /var/backups/xuexi_py
gzip -t /var/backups/xuexi_py/<BACKUP_FILE>.sql.gz
```

再把备份同步到服务器外部。

### 14.3 更新后端

```bash
cd /srv/xuexi_py_project
git fetch origin
git checkout main
git pull --ff-only origin main

cd xuexi_py_backend
conda run -n xuexi_py_backend python -m pip install .
conda run -n xuexi_py_backend alembic upgrade head
conda run -n xuexi_py_backend python -m app.scripts.seed
sudo systemctl restart xuexi-py-api
curl --fail http://127.0.0.1:8011/api/v1/health
```

### 14.4 更新前端

本地重新构建并上传 `dist/`，然后：

```bash
sudo rsync -a --delete /tmp/xuexi-py-dist/ /var/www/xuexi_py/xuexi_py/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 15. 回滚策略

### 15.1 代码回滚

上线前记录旧 commit：

```bash
git rev-parse HEAD
```

需要回滚时检出已经验证过的 commit 或 tag：

```bash
git checkout <PREVIOUS_COMMIT_OR_TAG>
cd xuexi_py_backend
conda run -n xuexi_py_backend python -m pip install .
sudo systemctl restart xuexi-py-api
```

### 15.2 数据库回滚

不要默认运行 `alembic downgrade`。结构可以降级不代表已经删除或转换的数据可以恢复。

更安全流程：

1. 上线前 `pg_dump`。
2. 新 migration 先在测试数据库验证。
3. 出现不可逆数据问题时，停止 API 写入。
4. 根据事故选择修复 migration 或从备份恢复。

恢复备份前必须再次备份当前故障现场。

---

## 16. 常见排错命令

### FastAPI

```bash
sudo systemctl status xuexi-py-api --no-pager
sudo journalctl -u xuexi-py-api -n 200 --no-pager
curl -v http://127.0.0.1:8011/api/v1/health
```

### PostgreSQL

```bash
cd /srv/xuexi_py_project
sudo docker compose ps
sudo docker compose logs --tail=200 postgres
sudo docker compose exec postgres pg_isready -U xuexi_py -d xuexi_py
```

### Nginx

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
sudo tail -n 200 /var/log/nginx/error.log
sudo tail -n 200 /var/log/nginx/access.log
```

### 端口

```bash
ss -lntp
```

正常应看到：

```text
0.0.0.0:22
0.0.0.0:80
0.0.0.0:443
127.0.0.1:5432
127.0.0.1:8011
```

### 内存

```bash
free -h
ps aux --sort=-%mem | head -20
sudo docker stats --no-stream
```

如果长期使用 Swap 或出现 OOM，优先升级到 4GB 内存，不要通过无限重启掩盖问题。

