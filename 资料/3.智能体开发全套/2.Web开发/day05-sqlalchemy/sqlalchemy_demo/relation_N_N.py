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

class Student(Base):
    __tablename__ = "student"
    id: Mapped[int] = mapped_column(BigInteger,primary_key=True,autoincrement=True)
    name: Mapped[str] = mapped_column(String(20))

    # 所有课程
    courses: Mapped[list["Course"]] = relationship(secondary="student_course", 
         back_populates="students")

    # 所有课程得分
    student_courses: Mapped[list["StudentCourse"]] = relationship(back_populates="student", cascade="all, delete-orphan")


class Course(Base):
    __tablename__ = "course"
    id: Mapped[int] = mapped_column(BigInteger,primary_key=True,autoincrement=True)
    title: Mapped[str] = mapped_column(String(20))
    # 所有课程得分
    student_courses: Mapped[list["StudentCourse"]] = relationship(back_populates="course", cascade="all, delete-orphan")

    # 所有学生
    students: Mapped[list["Student"]] = relationship(secondary="student_course", 
         back_populates="courses")

class StudentCourse(Base):
    __tablename__ = "student_course"
    id: Mapped[int] = mapped_column(BigInteger,primary_key=True,autoincrement=True)
    student_id: Mapped[int] = mapped_column(ForeignKey("student.id"))
    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"))
    grade: Mapped[int] = mapped_column(Integer)
    student: Mapped["Student"] = relationship(back_populates="student_courses")
    course: Mapped["Course"] = relationship(back_populates="student_courses")

# Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)
print("数据表创建成功...")
Session = sessionmaker(engine)


def test_add(student: Student, course: Course, grade: int):
    with Session() as session:
       sc =  StudentCourse(student=student, course=course, grade=grade)
       session.add(sc)
       session.commit()
       print(sc)
# stu =  Student(name="张三")
# c1 = Course(title="数学")
# c2 = Course(title="语文")
# c3 = Course(title="英语")

# stu2 =  Student(name="李四")
# test_add(stu, c1, 90)
# test_add(stu, c2, 99)
# test_add(stu, c3, 80)
# test_add(stu2, c1, 88)
# test_add(stu2, c2, 89)
# test_add(stu2, c3, 87)


# 查询
def query_student(student_id: int):
    with Session() as session:
        student = session.get(Student, student_id)
        if student:
            print(f"学生信息：{student.id}, {student.name}")
            for course in student.courses:
                print(f"课程：{course.id}, {course.title}")
            for sc in student.student_courses:
                print(f"课程得分： {sc.course_id}  {sc.course.title}, {sc.grade}")
        else:
            print("学生不存在...")
# query_student(1)

def update_student_grade(student_id: int, course_id: int, new_grade: int):
    with Session() as session:
        stu = session.get(Student, student_id)
        if stu:
            for sc in stu.student_courses:
                if sc.course_id == course_id:
                    sc.grade = new_grade
                    session.commit()
                    print(f"学生 {stu.name} 的 {sc.course.title} 成绩更新为 {new_grade}")
                    break
            else:
                print(f"学生 {stu.name} 没有选这门课程")
        else:
            print("学生不存在...")

# update_student_grade(1, 1, 120)

def delete_student_course_score(student_id: int, course_id: int):
    with Session() as session:
        sc = StudentCourse(student_id=student_id, course_id=course_id)
        session.query(StudentCourse).filter(StudentCourse.student_id == student_id,
            StudentCourse.course_id == course_id).delete()


        session.commit()

        # stu = session.get(Student, student_id)
        # if stu:
        #     for sc in stu.student_courses:
        #         if sc.course_id == course_id:
        #             session.delete(sc)
        #             session.commit()
        #             print(f"学生 {stu.name} 的 {sc.course.title} 成绩删除成功")
        #             break
        #     else:
        #         print(f"学生 {stu.name} 没有选这门课程")
        # else:
        #     print("学生不存在...")

delete_student_course_score(1, 2)

