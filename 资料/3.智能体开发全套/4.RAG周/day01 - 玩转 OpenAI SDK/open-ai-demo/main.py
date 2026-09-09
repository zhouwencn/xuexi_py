from dotenv import load_dotenv
import os

# 默认加载 .env 文件中的变量
load_dotenv("dev.env",override=True)

api_key = os.getenv("API_KEY")

base_url = os.getenv("BASE_URL")

print(api_key)
print(base_url)
