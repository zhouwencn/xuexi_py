from typing import Optional
from sqlalchemy import BigInteger, Column, ForeignKey, Integer, String, create_engine, select
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

## 1. 模型基类
class Base(DeclarativeBase):
    pass

class Department(Base):
    __tablename__ = "department"
    id: Mapped[int] = mapped_column(BigInteger, primary_key=True,autoincrement=True)
    name: Mapped[str] = mapped_column(String(50))

    # 部门下的员工： back_populates  反向引用
    employees: Mapped[list["Employee"]] = relationship(back_populates="department",cascade="all, delete-orphan")
    


class Employee(Base):
    __tablename__ = "employee"
    id: Mapped[int] = mapped_column(BigInteger, primary_key=True,autoincrement=True)
    name: Mapped[str] = mapped_column(String(50))
    # 多的一端声明外键
    department_id: Mapped[int] = mapped_column(BigInteger, ForeignKey("department.id"))
    # 员工所属部门： back_populates  反向引用
    department: Mapped["Department"] = relationship(back_populates="employees")
    
Base.metadata.create_all(engine)

Session = sessionmaker(engine)

# 添加 部门及员工
def add_department_employee(department_name: str, employee_names: list[str]):
    with Session() as session:
        # 每次创建的新部门。虽然名字一样，但是是不同记录
        department = Department(name=department_name)

        department.employees = [Employee(name=name) for name in employee_names]
        
        session.add(department)
        session.commit()
        print("保存完成....")
       
# add_department_employee("销售部", ["张三", "李四", "王五"])
# add_department_employee("采购部", ["赵六", "钱七"])

def get_dept(department_id: int):
    with Session() as session:
    #    stmt = select(Department).where(Department.id == department_id).order_by(Department.id)
    #    result = session.scalars(stmt).first()


       dept = session.get(Department, department_id)
       if dept:
           print(f"部门信息：{dept.id}, {dept.name}")
           for employee in dept.employees:
               print(f"员工信息：{employee.id}, {employee.name}")
       else:
           print("部门不存在...")

def get_emp(employee_id: int):
    with Session() as session:
       emp = session.get(Employee, employee_id)
       if emp:
           print(f"员工信息：{emp.id}, {emp.name}")
           print(f"部门信息：{emp.department.id}, {emp.department.name}")
       else:
           print("员工不存在...")


def update_emp(employee_id: int, name: str, department_id: int):
    with Session() as session:
        emp = session.get(Employee,employee_id)
        if emp:
            emp.name = name
            emp.department_id = department_id
            
            session.commit()
            print(f"员工信息更新成功：{emp.id}, {emp.name}, {emp.department_id}")
        else:
            print("员工不存在...")


# update_emp(1, "张三", 2)

def delete_dept(department_id: int):
    with Session() as session:
        dept = session.get(Department,department_id)
        if dept:
            session.delete(dept)
            session.commit()
            print(f"部门信息删除成功：{dept.id}, {dept.name}")  
        else:
            print("部门不存在...")

delete_dept(1)
