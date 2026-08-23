from sqlalchemy import CheckConstraint, ForeignKey, Integer, SmallInteger, String, Table, Text, Column
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


lesson_skills = Table(
    "lesson_skills",
    Base.metadata,
    Column("lesson_id", String(96), ForeignKey("lessons.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", String(96), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)

skill_prerequisites = Table(
    "skill_prerequisites",
    Base.metadata,
    Column("skill_id", String(96), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
    Column(
        "prerequisite_skill_id",
        String(96),
        ForeignKey("skills.id", ondelete="CASCADE"),
        primary_key=True,
    ),
)

project_skills = Table(
    "project_skills",
    Base.metadata,
    Column("project_id", String(96), ForeignKey("projects.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", String(96), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)

lab_skills = Table(
    "lab_skills",
    Base.metadata,
    Column("lab_id", String(96), ForeignKey("labs.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", String(96), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)


class Skill(Base):
    __tablename__ = "skills"
    __table_args__ = (
        CheckConstraint("level IN ('foundation', 'intermediate', 'advanced', 'expert')", name="ck_skills_level"),
        CheckConstraint("mastery_threshold BETWEEN 1 AND 100", name="ck_skills_mastery_threshold"),
    )

    id: Mapped[str] = mapped_column(String(96), primary_key=True)
    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id", ondelete="CASCADE"), index=True)
    stage_id: Mapped[str] = mapped_column(ForeignKey("stages.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(180))
    description: Mapped[str] = mapped_column(Text)
    level: Mapped[str] = mapped_column(String(24))
    mastery_threshold: Mapped[int] = mapped_column(SmallInteger, default=80, server_default="80")

    course: Mapped["Course"] = relationship(back_populates="skills")
    stage: Mapped["Stage"] = relationship(back_populates="skills")
    lessons: Mapped[list["Lesson"]] = relationship(secondary=lesson_skills, back_populates="skills")
    prerequisites: Mapped[list["Skill"]] = relationship(
        secondary=skill_prerequisites,
        primaryjoin=id == skill_prerequisites.c.skill_id,
        secondaryjoin=id == skill_prerequisites.c.prerequisite_skill_id,
    )
    projects: Mapped[list["Project"]] = relationship(secondary=project_skills, back_populates="skills")
    labs: Mapped[list["Lab"]] = relationship(secondary=lab_skills, back_populates="skills")


class Project(Base):
    __tablename__ = "projects"
    __table_args__ = (
        CheckConstraint("difficulty BETWEEN 1 AND 5", name="ck_projects_difficulty"),
        CheckConstraint("status IN ('available', 'coming-soon')", name="ck_projects_status"),
    )

    id: Mapped[str] = mapped_column(String(96), primary_key=True)
    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(180))
    summary: Mapped[str] = mapped_column(String(280))
    description: Mapped[str] = mapped_column(Text)
    difficulty: Mapped[int] = mapped_column(SmallInteger)
    estimated_hours: Mapped[int] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(24))

    course: Mapped["Course"] = relationship(back_populates="projects")
    skills: Mapped[list[Skill]] = relationship(secondary=project_skills, back_populates="projects")
    tasks: Mapped[list["ProjectTask"]] = relationship(
        back_populates="project",
        cascade="all, delete-orphan",
    )


class ProjectTask(Base):
    __tablename__ = "project_tasks"

    id: Mapped[str] = mapped_column(String(128), primary_key=True)
    project_id: Mapped[str] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(Text)
    starter_code: Mapped[str | None] = mapped_column(Text, nullable=True)
    acceptance_criteria: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")
    solution_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    project: Mapped[Project] = relationship(back_populates="tasks")


class Lab(Base):
    __tablename__ = "labs"
    __table_args__ = (
        CheckConstraint("level IN ('advanced', 'expert')", name="ck_labs_level"),
        CheckConstraint(
            "kind IN ('engineering', 'source', 'performance', 'incident', 'architecture', 'ai')",
            name="ck_labs_kind",
        ),
        CheckConstraint("status IN ('available', 'coming-soon')", name="ck_labs_status"),
    )

    id: Mapped[str] = mapped_column(String(96), primary_key=True)
    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(200))
    summary: Mapped[str] = mapped_column(String(300))
    description: Mapped[str] = mapped_column(Text)
    level: Mapped[str] = mapped_column(String(24))
    kind: Mapped[str] = mapped_column(String(24))
    estimated_hours: Mapped[int] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(24))
    objectives: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")

    course: Mapped["Course"] = relationship(back_populates="labs")
    skills: Mapped[list[Skill]] = relationship(secondary=lab_skills, back_populates="labs")
    steps: Mapped[list["LabStep"]] = relationship(back_populates="lab", cascade="all, delete-orphan")


class LabStep(Base):
    __tablename__ = "lab_steps"

    id: Mapped[str] = mapped_column(String(128), primary_key=True)
    lab_id: Mapped[str] = mapped_column(ForeignKey("labs.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(200))
    instructions: Mapped[str] = mapped_column(Text)
    commands: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")
    verification: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")
    hints: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")

    lab: Mapped[Lab] = relationship(back_populates="steps")


from app.models.course import Course, Lesson, Stage  # noqa: E402, F401
