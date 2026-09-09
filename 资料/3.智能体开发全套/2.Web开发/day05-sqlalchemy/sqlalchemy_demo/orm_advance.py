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
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, sessionmaker
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

# 一次性绑定号引擎。以后直接使用
Session = sessionmaker(engine)

    
# 脏追踪: 同一个会话查到的数据，如果修改了数据属性值，会话会自动追踪到。
# 提交事务时，会自动将修改的数据同步到数据库。
def query_user(user_id: int):
    with Session() as session:
       user = session.get(User,user_id)
       if user:
           print(user)
           user.age = 99
       else:
           print("用户不存在...")


query_user(1)