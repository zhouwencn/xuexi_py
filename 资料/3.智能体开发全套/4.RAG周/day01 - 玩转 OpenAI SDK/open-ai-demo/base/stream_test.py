from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv("API_KEY")
base_url = os.getenv("BASE_URL_RESPONSE")


from openai import OpenAI

client = OpenAI(base_url=base_url,
                api_key=api_key)


#
reponse = client.responses.create(
    input="介绍一下你自己",
    model="qwen3.5-plus",
    stream=True
)

# stream 流 是一个生成器，需要遍历才能拿到所有内容；  yield 是一个生成器
# 每次接受模型响应一个 chunk 的数据， 一个切片的数据;
# 一个 chunk 是一个事件。
## 多少种事件：
### 1. ResponseCreatedEvent: 响应创建事件
### 2. ResponseInProgressEvent: 响应进行中事件
### 3. ResponseOutputItemAddedEvent： 响应输出项添加事件
### 4. 【ResponseReasoningSummaryTextDeltaEvent】： 响应思考总结文本变化事件； 模型的思维过程
### 5. ResponseOutputItemDoneEvent： 响应输出项完成事件
### 6. ResponseOutputItemAddedEvent： 响应输出项添加事件； 模型的输出内容  和 11 是一对
### 7. ResponseContentPartAddedEvent： 响应内容部分添加事件； 模型的输出内容 和 10 是一对
### 8. 【ResponseTextDeltaEvent】： 响应文本变化事件； 模型的输出内容
### 9. ResponseTextDoneEvent： 响应文本完成事件
### 10. ResponseContentPartDoneEvent： 响应内容部分完成事件
### 11. ResponseOutputItemDoneEvent： 响应输出项完成事件
### 12. ResponseCompletedEvent： 响应完成事件

think_start = False
content_start = False

json_list = []

## 解析流式输出
for chunk in reponse:
    json_list.append(chunk.model_dump())

    ## 打印思考过程
    if chunk.type == "response.reasoning_summary_text.delta":
        if not think_start:
            print("开始思考：\n", end='', flush=True)
            think_start = True
        else:
            print(chunk.delta, end='', flush=True)


    ## 打印模型输出
    if chunk.type == "response.output_text.delta":

        if not content_start:
            print("大模型回复：\n", end='', flush=True)
            content_start = True
        else:
            print(chunk.delta, end='', flush=True)



# 写出 json_list 文件
import json

with open("stream_test.json", "w", encoding="utf-8") as f:
    json.dump(json_list, f, ensure_ascii=False, indent=2)

    ## 打印模型输出
    # print(chunk)




