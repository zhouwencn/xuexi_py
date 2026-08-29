import os
from openai import OpenAI

# 核心两个。base_url 和 api_key
client = OpenAI(
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
    api_key=os.getenv('DASHSCOPE_API_KEY'),
)

# 指定模型名字
completion = client.chat.completions.create(
        model="qwen-plus",  # 模型列表: https://help.aliyun.com/model-studio/getting-started/models
        messages=[
            {'role': 'system', 'content': 'You are a helpful assistant.'},
            {'role': 'user', 'content': '你是谁？'}
        ]
    )
print(completion.choices[0].message.content)
