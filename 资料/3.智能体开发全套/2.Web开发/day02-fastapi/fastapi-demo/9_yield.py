def count_up_to(n):
    print("Start counting")
    i = 1
    while i <= n:
        yield i      # 返回 i，但不结束函数
        i += 1
    print("Done!")

def haha(n):
    return n+1

n = haha(5)
print(n)

# 返回一个生成器。next 函数可以获取生成器的下一个值。 for 循环可以遍历生成器的所有值。
count = count_up_to(5)
print(count)

print("next ",next(count))
print("next ",next(count))
for i in count:
    print("for ",i)

def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()

for i in range(10):
    print(next(fib))

