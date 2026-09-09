from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv("API_KEY")
base_url = os.getenv("BASE_URL_RESPONSE")


from openai import OpenAI

client = OpenAI(base_url=base_url,
                api_key=api_key)

# 两种API开始的方式; 后来模型的强大功能，都在这个参数设置上
## 流式输出、工具调用、上下文记忆、多轮对话等
## 1. client.responses
## 2. client.chat
reponse = client.responses.create(
    input="翻译：你好",
    model="qwen3.5-plus",
    instructions="你是一个专业的3国语言翻译官，能翻译英文、中文、日文" ,# 系统消息，
    max_output_tokens=20,
)

## 每个模型有自己的思维过程
# reponse.output[0]：模型的思维过程
# print(reponse.output[0])
# # reponse.output[1] : 模型的输出
# print(reponse.output[1])
print("思考：",reponse.output[0].summary[0].text)

## 每个模型有自己的回复

print("最终回复：",reponse.output_text) # 快速拿到模型输出

## 此次请求模型用量
print(f"输入token用量：{reponse.usage.input_tokens}")
print(f"输出token用量：{reponse.usage.output_tokens}")
print(f"其中，思考token用量：{reponse.usage.output_tokens_details.reasoning_tokens}")
print(f"总token用量：{reponse.usage.total_tokens}")


# 把 response 输出为json文件
import json

#  reponse.model_dump()   obj.model_dump() 把对象转为字典【pydantic模型】

with open("response_api_datastruct.json", "w", encoding="utf-8") as f:
    # 直接json写出
    json.dump(reponse.model_dump(), f, ensure_ascii=False, indent=2)




