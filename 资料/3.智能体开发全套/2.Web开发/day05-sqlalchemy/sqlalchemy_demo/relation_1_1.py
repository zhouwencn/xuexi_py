from typing import Optional
from sqlalchemy import BigInteger, Column, ForeignKey, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker
database_url = "mysql+pymysql://leifengyang:FijAFXC4WiCRqOPY@mysql6.sqlpub.com:3311/lfy_testdb"

engine = create_engine(database_url,
        echo=True, # 打印sql语句
        pool_size=5, # 连接池大小
        max_overflow=10, # 最大溢出连接数. 最多允许同时10个链接
        )

print("引擎信息：",engine)



################# 使用ORM 模式 #################
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, sessionmaker
Session = sessionmaker(engine)
## 1. 模型基类
class Base(DeclarativeBase):
    pass

## 2. 创建User 模型
class User(Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(50),nullable=False)
    age: Mapped[Optional[int]] = mapped_column(Integer,server_default="0")
    # 关联属性  lazy: select 用的时候查，不用不查。 uselist=False 表示 1对1关系
    # lazy = joined： 直接使用 join 语句， 一次查询出来用户和用户资料。
    # backref: 反向引用， 可以通过 关联属性  直接访问到 关联的对象； 
    # cascade: 级联操作。 当用户删除时，关联的用户资料也会删除。
    # profile: Mapped["Profile"] = relationship("Profile", backref="user",uselist=False, lazy="joined",
    #    cascade="all, delete-orphan")
    profile: Mapped["Profile"] = relationship("Profile", back_populates="user",uselist=False, lazy="joined",
       cascade="all, delete-orphan")

    def __repr__(self):
        return f"User(id={self.id}, name={self.name}, age={self.age})"

class Profile(Base):
    __tablename__ = "profiles"
    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    # 声明外键; ondelete="CASCADE" 只是数据库级别创建表的时候，声明的行为。
    # orm 框架，是默认把 user_id 外键置为null
    # mapped_column 仅代表数据库底层，这一列怎么创建。只影响当时 CREATE TABLE 语句。
    user_id: Mapped[int] = mapped_column(BigInteger, ForeignKey("user.id", ondelete="CASCADE"))
    bio: Mapped[Optional[str]] = mapped_column(String(200),default="", server_default="这个家伙很懒...什么都没留下")
    # 自动隐式的包含了 user 属性。无需我们手动定义
    user: Mapped["User"] = relationship("User", back_populates="profile", lazy="select")


    def __repr__(self):
        return f"Profiles(id={self.id}, user_id={self.user_id}, bio={self.bio})"

# 我们希望 直接可以  对象.关联属性  就能拿到关联数据（数据库建立关联关系，ORM维护关联关系）
# 1. user.profiles orm就可以自动的拿到这个用户的资料
# 2. profiles.user orm就可以自动的拿到这个资料对应的用户

# 创建数据表
# Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)
print("数据表创建成功...")

#### 测试 CRUD 功能 ####   user.profile  profile.user

def test_add(user: User,profile: Profile):
    with Session() as session:

       
        user.profile = profile

        # 保存用户； 自动保存用户和用户资料
        session.add(user)
        session.commit()
        print(user)

# test_add(User(name="李四",age=20),Profile(bio="我是李老四"))
# test_add(User(name="王五",age=22),Profile(bio="我是王五"))


# user 里面声明了  profile 属性，所以直接能用
def query_user(user_id: int):
    with Session() as session:
        user = session.get(User, user_id)
        if user:
            print(f"用户信息：{user.id}, {user.name}, {user.age}")
            # 懒加载; lazy="select"
            # 立即加载; lazy="joined"  发起链表sql
            # pf = user.profile
            # print(f"用户资料：{pf.id}, {pf.user_id}, {pf.bio}")
        else:
            print("用户不存在...")

def get_profile(profile_id: int):
    with Session() as session:
        profile = session.get(Profile, profile_id)
        if profile:
            print(f"用户资料：{profile.id}, {profile.user_id}, {profile.bio}")
            u = profile.user
            print(f"用户信息：{u.id}, {u.name}, {u.age}")
        else:
            print("用户资料不存在...")

# get_profile(2)

def update_user(user_id: int, name: str, age: int, bio: str):
    with Session() as session:
        user = session.get(User, user_id)
        if user:
            user.name = name
            user.age = age
            user.profile.bio = bio
            session.commit()
            print(f"用户信息更新成功：{user.id}, {user.name}, {user.age}, {user.profile.bio}")
        else:
            print("用户不存在...")

# update_user(1, "雷丰阳", 99, "我是老雷哈哈")

def delete_user(user_id: int):
    with Session() as session:
        user = session.get(User, user_id)
        if user:
            session.delete(user)
            session.commit()
            print(f"用户删除成功：{user.id}, {user.name}, {user.age}")
        else:
            print("用户不存在...")
# 如果仅在外键级别设置级联删除，相当于只是数据库级别的删除。
# ORM 框架，是默认把 user_id 外键置为null
delete_user(2)