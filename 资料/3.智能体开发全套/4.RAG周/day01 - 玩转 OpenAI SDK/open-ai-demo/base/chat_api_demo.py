from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv("API_KEY")
base_url = os.getenv("BASE_URL_CHAT")

from openai import OpenAI

client = OpenAI(
    api_key=api_key,
    base_url=base_url,
)

# 后来大模型为了实现对话上下文记忆。维护每次聊天的问答 messages 记录
response = client.chat.completions.create(
    model="qwen3.5-plus",
    messages=[
        {"role": "system", "content": "你是一个专业的翻译"},
        {"role": "user", "content": "翻译 你好"},
    ]
)

# print(responses.choices[0].message.content)
print(response.choices[0].message.content)

# 把 response 的json输出为文件
import json
with open("chat_api_datastruct.json", "w", encoding="utf-8") as f:
    # 直接json写出
    json.dump(response.model_dump(), f, ensure_ascii=False, indent=2)


