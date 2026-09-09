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
    input="写一个三句话的短故事，主角是一只猫和一束阳光",
    model="qwen3.5-plus",
    temperature=0.9,
    top_p=0.3 # 累积概率
)


# print(f"思考：{reponse.output[0].summary[0].text} \n\n")

## 每个模型有自己的回复

print(f"最终回复：{reponse.output_text} \n\n") # 快速拿到模型输出

## 此次请求模型用量
print(f"输入token用量：{reponse.usage.input_tokens}")
print(f"输出token用量：{reponse.usage.output_tokens}")
print(f"其中，思考token用量：{reponse.usage.output_tokens_details.reasoning_tokens}")
print(f"总token用量：{reponse.usage.total_tokens}")





