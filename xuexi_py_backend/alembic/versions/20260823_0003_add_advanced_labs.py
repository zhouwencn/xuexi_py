"""add advanced and expert labs

Revision ID: 20260823_0003
Revises: 20260823_0002
Create Date: 2026-08-23
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260823_0003"
down_revision: str | None = "20260823_0002"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug', 'code', 'review', 'incident', 'design')",
    )
    op.create_table(
        "labs",
        sa.Column("id", sa.String(length=96), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("summary", sa.String(length=300), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("level", sa.String(length=24), nullable=False),
        sa.Column("kind", sa.String(length=24), nullable=False),
        sa.Column("estimated_hours", sa.Integer(), nullable=False),
        sa.Column("status", sa.String(length=24), nullable=False),
        sa.Column(
            "objectives",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default="[]",
            nullable=False,
        ),
        sa.CheckConstraint("level IN ('advanced', 'expert')", name="ck_labs_level"),
        sa.CheckConstraint(
            "kind IN ('engineering', 'source', 'performance', 'incident', 'architecture', 'ai')",
            name="ck_labs_kind",
        ),
        sa.CheckConstraint("status IN ('available', 'coming-soon')", name="ck_labs_status"),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_labs_course_id", "labs", ["course_id"], unique=False)
    op.create_table(
        "lab_skills",
        sa.Column("lab_id", sa.String(length=96), nullable=False),
        sa.Column("skill_id", sa.String(length=96), nullable=False),
        sa.ForeignKeyConstraint(["lab_id"], ["labs.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["skill_id"], ["skills.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("lab_id", "skill_id"),
    )
    op.create_table(
        "lab_steps",
        sa.Column("id", sa.String(length=128), nullable=False),
        sa.Column("lab_id", sa.String(length=96), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("instructions", sa.Text(), nullable=False),
        sa.Column(
            "commands",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default="[]",
            nullable=False,
        ),
        sa.Column(
            "verification",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default="[]",
            nullable=False,
        ),
        sa.Column(
            "hints",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default="[]",
            nullable=False,
        ),
        sa.ForeignKeyConstraint(["lab_id"], ["labs.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_lab_steps_lab_id", "lab_steps", ["lab_id"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_lab_steps_lab_id", table_name="lab_steps")
    op.drop_table("lab_steps")
    op.drop_table("lab_skills")
    op.drop_index("ix_labs_course_id", table_name="labs")
    op.drop_table("labs")
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug', 'code')",
    )
