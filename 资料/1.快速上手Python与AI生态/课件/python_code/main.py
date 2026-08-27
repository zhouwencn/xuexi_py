# from my_pkg import math_operations

# result_add = math_operations.add(10, 5)
# print(f"加法结果: {result_add}")
# result_sub = math_operations.sub(10, 5)
# print(f"减法结果: {result_sub}")

from my_pkg.math_operations import add, sub

result_add = add(10, 5)
print(f"加法结果: {result_add}")
result_sub = sub(10, 5)
print(f"减法结果: {result_sub}")