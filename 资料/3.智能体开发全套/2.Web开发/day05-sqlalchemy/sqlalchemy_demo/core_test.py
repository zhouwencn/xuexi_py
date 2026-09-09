from sqlalchemy import create_engine, text
# 1. 准备自己的数据库url
database_url = "mysql+pymysql://leifengyang:FijAFXC4WiCRqOPY@mysql6.sqlpub.com:3311/lfy_testdb"

# 2. 创建引擎
engine = create_engine(database_url,
        echo=True, # 打印sql语句
        pool_size=5, # 连接池大小
        max_overflow=10, # 最大溢出连接数. 最多允许同时10个链接
        )

print("引擎信息：",engine)

# 3. 创建会话（Session）。从引擎中获取一个连接（Connection）

# 老式写法
# ## 3.1 获取一个连接
# conn = engine.connect()
# ## 3.2 执行sql语句。得到sql的执行结果（结果集）
# result = conn.execute(text("select '雷丰阳'"))

# ## 3.3 从结果集中获取数据
# # result.fetchone() #获取一行结果记录
# # result.fetchall() #获取所有结果记录
# print("获取结果", result.fetchone())

# ## 3.4 关闭连接
# conn.close()

# python 上下文管理器。自动关闭连接。
def test_select():
    with engine.connect() as conn:
        result = conn.execute(text("select '雷丰阳'"))
        print("获取结果", result.fetchone())

# 默认情况下，关闭连接会回滚所有数据。因为是查询，和事务无关。rollback() 无所谓
# 如果是 增删改，就必须 手动提交事务。否则数据不会真正的保存到数据库中。
## conn.commit()   conn.rollback()

## 做事务操作
def my_transaction():

    with engine.connect() as conn:
        # 执行多条SQL
        conn.execute(text("CREATE TABLE person (age int, name varchar(20))"))
        

        # 插入多行数据【批量插入】  :变量 代表动态填充
        stmt = text("INSERT INTO person (age, name) VALUES (:age, :name)")
        conn.execute(statement=stmt,
            parameters=[
                {"age": 18, "name": "张三"},
                {"age": 20, "name": "李四"},
            ]
        )

        conn.commit()
        print("事务提交成功...")


## 1. 测试 查询多条记录
def test_select_many():
    with engine.connect() as conn:
        ## 1. 创建sql
        stmt = text("select * from person")
        ## 2. 执行sql，返回 CursorResult。是一个可迭代对象
        result = conn.execute(stmt)

        ## 3. 直接遍历：获取每一行数据
        # for row in result:
        #     print(f"row：{row}")
        #     ### 获取结果方式1：通过属性名
        #     print(f"通过属性名获取结果： name: {row.name},  age: {row.age}")
        #     ### 获取结果方式2：通过索引
        #     print(f"通过索引获取结果： name: {row[1]},  age: {row[0]}")

        # 4. 获取结果方式3：转为字典，通过字典属性名获取结果
        # for row in result.mappings():
        #     print(f"row：{row}")
        #     print(f"通过属性名获取结果： name: {row['name']},  age: {row['age']}")
        # 5. 获取结果方式4： result 中 每个row 是一个元组。直接使用元组解构的
        # for name,age in result:  # 直接获取到指定列的值
        #     print(f"通过元组解构获取结果： name: {name},  age: {age}")

        for row in result.mappings():
            print(f"row：{row}")

test_select_many()

# 元组是一个只读的
aaa = (1,2,3,True)

def query_by_condition():
    with engine.connect() as conn:
        ## 1. 创建sql；使用text() +  :变量名 动态占位 解决sql注入问题
        stmt = text("select * from person where age > :age")
        ## 2. 执行sql，返回 CursorResult。是一个可迭代对象
        result = conn.execute(stmt, {"age": 18})

        ## 3. 直接遍历：获取每一行数据
        for row in result:
            print(f"row：{row}")

query_by_condition()


def insert_batch():
    with engine.connect() as conn:
        ## 1. 创建sql；使用text() +  :变量名 动态占位 解决sql注入问题
        stmt = text("INSERT INTO person (age, name) VALUES (:age, :name)")
        ## 2. 执行sql，返回 CursorResult。是一个可迭代对象
        conn.execute(stmt,
            [
                {"age": 19, "name": "王五"},
                {"age": 23, "name": "赵六"},
            ]
        )
        conn.commit()
        print("事务提交成功...")

insert_batch()