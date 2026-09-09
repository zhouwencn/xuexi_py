# 方法1：使用无效的 base_url 触发连接错误
import time

from openai import OpenAI

# 第一次： 2s
# 来三次： 8~9
client = OpenAI(
    api_key="dummy_key",
    base_url="http://localhost:9999/v1",  # 不存在的服务
    max_retries=3,
    timeout=2  # 设置较短的超时以便快速测试
)

start_time = time.time()
try:
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "test"}]
    )
    print(response.choices[0].message.content)
except Exception as e:
    # 达到总重试次数后，抛出异常；
    elapsed = time.time() - start_time
    print(f"❌ 请求失败: {e}")
    print(f"⏱️  总耗时: {elapsed:.2f} 秒")
    print(f"📊 预期重试次数: {client.max_retries}")
    print(f"⏰ 耗时应该包含多次重试")