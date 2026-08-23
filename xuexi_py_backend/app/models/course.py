from datetime import datetime
from typing import Any

from sqlalchemy import Boolean, CheckConstraint, DateTime, ForeignKey, Integer, SmallInteger, String, Text, UniqueConstraint, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Course(Base):
    __tablename__ = "courses"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    title: Mapped[str] = mapped_column(String(160))
    description: Mapped[str] = mapped_column(Text)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True, server_default="true")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    stages: Mapped[list["Stage"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    skills: Mapped[list["Skill"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    projects: Mapped[list["Project"]] = relationship(back_populates="course", cascade="all, delete-orphan")
    labs: Mapped[list["Lab"]] = relationship(back_populates="course", cascade="all, delete-orphan")


class Stage(Base):
    __tablename__ = "stages"
    __table_args__ = (
        CheckConstraint("status IN ('active', 'coming-soon')", name="ck_stages_status"),
        UniqueConstraint("course_id", "order", name="uq_stages_course_order"),
    )

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(180))
    short_title: Mapped[str] = mapped_column(String(80))
    description: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(32))

    course: Mapped[Course] = relationship(back_populates="stages")
    lessons: Mapped[list["Lesson"]] = relationship(back_populates="stage", cascade="all, delete-orphan")
    skills: Mapped[list["Skill"]] = relationship(back_populates="stage", cascade="all, delete-orphan")


class Lesson(Base):
    __tablename__ = "lessons"
    __table_args__ = (
        CheckConstraint("difficulty BETWEEN 1 AND 5", name="ck_lessons_difficulty"),
        CheckConstraint("importance IN ('must', 'frequent', 'read', 'skip')", name="ck_lessons_importance"),
        CheckConstraint("status IN ('available', 'coming-soon')", name="ck_lessons_status"),
        UniqueConstraint("stage_id", "order", name="uq_lessons_stage_order"),
    )

    id: Mapped[str] = mapped_column(String(96), primary_key=True)
    stage_id: Mapped[str] = mapped_column(ForeignKey("stages.id", ondelete="CASCADE"), index=True)
    order: Mapped[int] = mapped_column(Integer)
    title: Mapped[str] = mapped_column(String(180))
    subtitle: Mapped[str] = mapped_column(String(240))
    duration: Mapped[int] = mapped_column(Integer)
    difficulty: Mapped[int] = mapped_column(SmallInteger)
    importance: Mapped[str] = mapped_column(String(32))
    status: Mapped[str] = mapped_column(String(32))
    one_liner: Mapped[str] = mapped_column(Text)
    comparison: Mapped[dict[str, Any]] = mapped_column(JSONB)
    explanation: Mapped[list[dict[str, Any]]] = mapped_column(JSONB)
    common_errors: Mapped[list[dict[str, Any]]] = mapped_column(JSONB)
    real_world: Mapped[dict[str, Any]] = mapped_column(JSONB)
    simulated_output: Mapped[str | None] = mapped_column(Text, nullable=True)

    stage: Mapped[Stage] = relationship(back_populates="lessons")
    exercises: Mapped[list["Exercise"]] = relationship(back_populates="lesson", cascade="all, delete-orphan")
    skills: Mapped[list["Skill"]] = relationship(secondary="lesson_skills", back_populates="lessons")


class Exercise(Base):
    __tablename__ = "exercises"
    __table_args__ = (
        CheckConstraint("source IN ('lesson', 'challenge')", name="ck_exercises_source"),
        CheckConstraint(
            "type IN ('fill', 'choice', 'predict', 'debug', 'code', 'review', 'incident', 'design')",
            name="ck_exercises_type",
        ),
        CheckConstraint("difficulty BETWEEN 1 AND 5", name="ck_exercises_difficulty"),
    )

    id: Mapped[str] = mapped_column(String(128), primary_key=True)
    lesson_id: Mapped[str] = mapped_column(ForeignKey("lessons.id", ondelete="CASCADE"), index=True)
    source: Mapped[str] = mapped_column(String(24))
    title: Mapped[str | None] = mapped_column(String(200), nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer)
    type: Mapped[str] = mapped_column(String(24))
    prompt: Mapped[str] = mapped_column(Text)
    code: Mapped[str | None] = mapped_column(Text, nullable=True)
    options: Mapped[list[str]] = mapped_column(JSONB)
    answer: Mapped[str] = mapped_column(Text)
    explanation: Mapped[str] = mapped_column(Text)
    difficulty: Mapped[int] = mapped_column(SmallInteger, default=1, server_default="1")
    starter_code: Mapped[str | None] = mapped_column(Text, nullable=True)
    test_cases: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list, server_default="[]")
    hints: Mapped[list[str]] = mapped_column(JSONB, default=list, server_default="[]")
    hidden_test_cases: Mapped[list[dict[str, Any]]] = mapped_column(JSONB, default=list, server_default="[]")

    lesson: Mapped[Lesson] = relationship(back_populates="exercises")


# 避免运行时循环导入，同时让 SQLAlchemy 能解析字符串关系。
from app.models.learning import Lab, Project, Skill  # noqa: E402, F401
