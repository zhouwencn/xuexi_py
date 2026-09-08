# 创建 conda 虚拟环境

```bash
conda create -n sqlalchemy_demo python=3.13

conda activate sqlalchemy_demo

## 安装依赖
pip install -r requirements.txt
```

# 安装依赖

```bash
pip install sqlalchemy
pip install pymysql
```

# 操作流程
## 1. 创建引擎

## 2. 从引擎中获取会话

## 3. 在会话中执行 crud

# 数据库连接配置

`core_test.py` 和 `orm_test.py` 从环境变量 `DATABASE_URL` 读取连接串。运行前在同一个终端设置（将占位内容替换为自己的数据库配置）：

```bash
export DATABASE_URL='mysql+pymysql://用户名:密码@主机:3306/数据库名'
python core_test.py
# 或运行 ORM 示例
python orm_test.py
```

本地 `.env` 已被 Git 忽略，可用于保存自己的配置；这两个脚本不会自动加载 `.env`。请勿将真实连接串写回源码或提交到仓库。
