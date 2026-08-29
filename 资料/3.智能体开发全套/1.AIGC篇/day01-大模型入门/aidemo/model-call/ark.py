import os
from openai import OpenAI

# 核心四个
#   1. base_url： 访问谁
#   2. api_key： 权限令牌
#   3. model： 模型名字
#   4. input/message： 提示词（输入文档）
# 核心两个。base_url 和 api_key
client = OpenAI(
    base_url='https://ark.cn-beijing.volces.com/api/v3',
    # api_key=os.getenv('ARK_API_KEY'),​
    api_key="fa9643ea-1005-4ad1-96f5-4dca8d05af19",
)

# 指定模型名字
response = client.responses.create(
    model="doubao-seed-1-6-251015",
    input="介绍下自己", # Replace with your prompt​
    extra_body={
        # "thinking": {"type": "disabled"}, #  Manually disable deep thinking​
    },
)

# 打印结果
print(response)