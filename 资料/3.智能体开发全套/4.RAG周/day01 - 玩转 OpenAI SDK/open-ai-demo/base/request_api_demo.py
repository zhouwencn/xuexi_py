import requests

# curl -X POST https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions \
# -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
# -H "Content-Type: application/json" \
# -d '{
#     "model": "qwen-plus",
#     "messages": [
#         {
#             "role": "system",
#             "content": "You are a helpful assistant."
#         },
#         {
#             "role": "user",
#             "content": "你是谁？"
#         }
#     ]
# }'

response = requests.post("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
              headers={"Content-Type": "application/json",
                       "Authorization": "Bearer sk-ccd167dc0a7e446e8f5f0f8d45c31a78"},
              json={
                  "model": "qwen-plus",
                  "messages": [
                      {"role": "system", "content": "You are a helpful assistant."},
                      {"role": "user", "content": "你是谁？"}
                  ]
              }
            )
js = response.json()
# 写出 json 到文件
import json

with open("request_api_datastruct.json", "w", encoding="utf-8") as f:
    # 直接json写出
    json.dump(js, f, ensure_ascii=False, indent=2)
