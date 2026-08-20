"""create course catalog

Revision ID: 20260821_0001
Revises:
Create Date: 2026-08-21
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260821_0001"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "courses",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("title", sa.String(length=160), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("is_published", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "stages",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("short_title", sa.String(length=80), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.CheckConstraint("status IN ('active', 'coming-soon')", name="ck_stages_status"),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("course_id", "order", name="uq_stages_course_order"),
    )
    op.create_index("ix_stages_course_id", "stages", ["course_id"], unique=False)
    op.create_table(
        "lessons",
        sa.Column("id", sa.String(length=96), nullable=False),
        sa.Column("stage_id", sa.String(length=64), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("subtitle", sa.String(length=240), nullable=False),
        sa.Column("duration", sa.Integer(), nullable=False),
        sa.Column("difficulty", sa.SmallInteger(), nullable=False),
        sa.Column("importance", sa.String(length=32), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("one_liner", sa.Text(), nullable=False),
        sa.Column("comparison", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("explanation", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("common_errors", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("real_world", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("simulated_output", sa.Text(), nullable=True),
        sa.CheckConstraint("difficulty BETWEEN 1 AND 5", name="ck_lessons_difficulty"),
        sa.CheckConstraint("importance IN ('must', 'frequent', 'read', 'skip')", name="ck_lessons_importance"),
        sa.CheckConstraint("status IN ('available', 'coming-soon')", name="ck_lessons_status"),
        sa.ForeignKeyConstraint(["stage_id"], ["stages.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("stage_id", "order", name="uq_lessons_stage_order"),
    )
    op.create_index("ix_lessons_stage_id", "lessons", ["stage_id"], unique=False)
    op.create_table(
        "exercises",
        sa.Column("id", sa.String(length=128), nullable=False),
        sa.Column("lesson_id", sa.String(length=96), nullable=False),
        sa.Column("source", sa.String(length=24), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=True),
        sa.Column("sort_order", sa.Integer(), nullable=False),
        sa.Column("type", sa.String(length=24), nullable=False),
        sa.Column("prompt", sa.Text(), nullable=False),
        sa.Column("code", sa.Text(), nullable=True),
        sa.Column("options", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("answer", sa.Text(), nullable=False),
        sa.Column("explanation", sa.Text(), nullable=False),
        sa.CheckConstraint("source IN ('lesson', 'challenge')", name="ck_exercises_source"),
        sa.CheckConstraint("type IN ('fill', 'choice', 'predict', 'debug')", name="ck_exercises_type"),
        sa.ForeignKeyConstraint(["lesson_id"], ["lessons.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_exercises_lesson_id", "exercises", ["lesson_id"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_exercises_lesson_id", table_name="exercises")
    op.drop_table("exercises")
    op.drop_index("ix_lessons_stage_id", table_name="lessons")
    op.drop_table("lessons")
    op.drop_index("ix_stages_course_id", table_name="stages")
    op.drop_table("stages")
    op.drop_table("courses")
