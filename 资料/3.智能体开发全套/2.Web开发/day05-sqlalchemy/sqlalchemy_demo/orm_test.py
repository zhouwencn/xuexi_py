from typing import Optional
from sqlalchemy import Column, Integer, String, create_engine, delete, select, text
database_url = "mysql+pymysql://leifengyang:FijAFXC4WiCRqOPY@mysql6.sqlpub.com:3311/lfy_testdb"

engine = create_engine(database_url,
        echo=True, # 打印sql语句
        pool_size=5, # 连接池大小
        max_overflow=10, # 最大溢出连接数. 最多允许同时10个链接
        )

print("引擎信息：",engine)

################# 使用ORM 模式 #################
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column
## 1. 模型基类
class Base(DeclarativeBase):
    pass

## 2. 创建模型类
class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(50))
    age: Mapped[Optional[int]] = mapped_column(Integer,default=0)
    fullname: Mapped[str] = mapped_column(String(30))
    nickname: Mapped[Optional[str]] = mapped_column(String(30),default="")

    def __repr__(self):
        return f"User(id={self.id}, name={self.name}, age={self.age}, fullname={self.fullname}, nickname={self.nickname})"

## 3. 自动创建数据表
Base.metadata.create_all(engine)
# Base.metadata.drop_all(engine)

print("数据表删除成功...")

## ORM 下，使用 session api； 从引擎中创建 会话（Session）。使用 session api 来做crud

## 1. 新增用户
def insert_user(user: User):
    ### 1. 创建会话；  session 中直接封装了 所有的 CRUD 功能
    with Session(engine) as session:
        ### 3. 新增用户
        session.add(user)
        ### 4. 提交事务
        session.commit()
        print("新增用户成功...")

# insert_user(User(name="李四", age=19, fullname="李四", nickname="lisi"))
# insert_user(User(name="王五", age=20, fullname="王五", nickname="wangwu"))
# insert_user(User(name="赵六", age=33, fullname="赵六", nickname="zhaoliu"))


def query_user():
    with Session(engine) as session:
        ## 查询的两种常用做法

        ### 1. 方式1：使用session 提供的 query/get 函数：查询所有用户。 默认都用这个
        # users = session.query(User).all()  # 查所有
        # user = session.get(User,2) # 查单个
        # users = session.query(User).filter(User.age > 19).order_by(User.age).all()
        # for user in users:
        #     print("用户信息：",user)


        ### 2. 方式2：使用select() 写类似的sql语句，让session执行; 需要复杂sql的场景一般用这个方式
        # select * from users where age>18 and name like ? order by age
        stmt = select(User).where(User.age > 10).where(User.name.like("%三%")).order_by(User.age)
        users = session.execute(stmt).scalars().all()
        for user in users:
            print("用户信息：",user)

# 获取 == 修改 == 保存
def update_user(user_id: int, age: int):
    with Session(engine) as session:
        # 两套API。
        ## 1. sql api。 从 select()/update()/delete()/insert() 开始自己拼
        ## 2. session api。 直接使用 session 提供的功能
        user = session.get(User,user_id)
        if user:
            # 修改对象的属性值
            user.age = age
            # 重新保存对象
            session.add(user)
        else:
            print("用户不存在...")

        session.commit()
        print("更新用户成功...")
    
def delete_user(user_id: int):
    with Session(engine) as session:
        # 两套API。
        ## 1. sql api。 从 select()/update()/delete()/insert() 开始自己拼
        stmt = delete(User).where(User.id == user_id)
        session.execute(stmt)   

        ## 2. session api。 直接使用 session 提供的功能
        # user = session.get(User,user_id)
        # if user:
        #     # 删除对象
        #     session.delete(user)
        # else:
        #     print("用户不存在...")
        session.commit()
        print("删除用户成功...")

delete_user(3)

