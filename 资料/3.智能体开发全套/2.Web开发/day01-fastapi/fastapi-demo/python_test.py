from typing import Any


def get_full_name(first_name: str, last_name: str):
    # 字符串.title(): 首字母大写
    
    
    full_name = first_name.title() + " " + last_name.title()
    return full_name

def some_function(data: Any):
    print(data)

# ["aa","bb","cc"]
def process_items(items: list[str]):
    for item in items:
        print(item)
# [1,2,3]： 列表是可变的
# (1,2,"aaa")： 元组是只读
def process_items(items_t: tuple[int, int, str], 
            items_s: set[bytes]):
    return items_t, items_s

# python  kv 结构叫 字典。 Java中的Map
def process_items(prices: dict[str, float]):
    for item_name, item_price in prices.items():
        print(item_name)
        print(item_price)
    
# 联合类型
def process_item(item: int | str):
    print(item)

def say_hi(name: str | None = None):
    if name is not None:
        print(f"Hey {name}!")
    else:
        print("Hello World")
say_hi()