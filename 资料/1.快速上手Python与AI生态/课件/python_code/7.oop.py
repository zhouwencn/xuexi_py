# 案例演示：Python 的类和对象
# 1. 类
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def introduce(self):
        print(f"我叫 {self.name}，今年 {self.age} 岁。")

# 创建对象
person1 = Person("张三", 25)
person1.introduce()
person1.age = 33
person1.introduce()


# 2. 封装
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number
        self.__balance = balance
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"存入 {amount} 元，当前余额为 {self.__balance} 元。")
        else:
            print("存入金额必须大于 0。")
    def withdraw(self, amount):
        if amount > 0 and amount <= self.__balance:
            self.__balance -= amount
            print(f"取出 {amount} 元，当前余额为 {self.__balance} 元。")
        else:
            print("取出金额无效或余额不足。")

# 创建银行账户对象
account = BankAccount("123456789", 1000)
account.deposit(500)
account.withdraw(200)

# 3. 继承
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print(f"{self.name} 汪汪叫。")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} 喵喵叫。")

# 创建对象
dog = Dog("旺财")
dog.speak()

cat = Cat("咪咪")
cat.speak()

# 4. 多态
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width
    def area(self):
        return self.length * self.width

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius * self.radius

# 定义一个函数，接受一个 Shape 对象并调用其 area 方法
def print_area(shape):
    print(f"该图形的面积是 {shape.area()}。")

# 创建对象
rectangle = Rectangle(5, 3)
circle = Circle(2)

# 调用 print_area 函数
print_area(rectangle)
print_area(circle)

# 5. 实例变量、类变量、实例方法、类方法和静态方法
class MyClass:
    # 类变量
    class_variable = 0
    def __init__(self, instance_variable):
        # 实例变量
        self.instance_variable = instance_variable
        MyClass.class_variable += 1
    # 实例方法
    def instance_method(self):
        return f'实例变量: {self.instance_variable}, 类变量: {MyClass.class_variable}'
    # 类方法
    @classmethod
    def class_method(cls):
        return f'类变量: {cls.class_variable}'
    # 静态方法
    @staticmethod
    def static_method(): 
        return '这是一个静态方法'
# 创建实例
obj1 = MyClass(1)
obj2 = MyClass(2)
# 调用实例方法
print(obj1.instance_method())
# 调用类方法
print(MyClass.class_method())
# 调用静态方法
print(MyClass.static_method())

# 6. 特殊方法（Magic Methods）
# 是一些具有特殊命名的方法，它们以双下划线开头和结尾，例如__init__ 、__str__ 等
class MyClass2:
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return f"MyClass2({self.value})"
    def __add__(self, other):
        return MyClass2(self.value + other.value)
# 创建实例
obj1 = MyClass2(10)
obj2 = MyClass2(20)
# 调用 __str__ 方法
print(str(obj1))
# 调用 __add__ 方法
print(obj1 + obj2)


print(__name__)  # 输出当前模块的名称