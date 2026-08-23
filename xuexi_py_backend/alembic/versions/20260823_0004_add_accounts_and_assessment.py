"""add accounts, progress, diagnostics and submissions

Revision ID: 20260823_0004
Revises: 20260823_0003
Create Date: 2026-08-23
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260823_0004"
down_revision: str | None = "20260823_0003"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.add_column(
        "exercises",
        sa.Column("hidden_test_cases", postgresql.JSONB(astext_type=sa.Text()), server_default="[]", nullable=False),
    )
    op.create_table(
        "users",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("email", sa.String(length=320), nullable=False),
        sa.Column("display_name", sa.String(length=80), nullable=False),
        sa.Column("password_hash", sa.String(length=255), nullable=False),
        sa.Column("is_active", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("email"),
    )
    op.create_table(
        "user_progress",
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("state", postgresql.JSONB(astext_type=sa.Text()), server_default="{}", nullable=False),
        sa.Column("version", sa.Integer(), server_default="1", nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("user_id", "course_id"),
    )
    op.create_table(
        "diagnostic_attempts",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("answers", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("skill_scores", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column("score", sa.Integer(), nullable=False),
        sa.Column("recommended_skill_ids", postgresql.JSONB(astext_type=sa.Text()), server_default="[]", nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_diagnostic_attempts_user_id", "diagnostic_attempts", ["user_id"], unique=False)
    op.create_index("ix_diagnostic_attempts_course_id", "diagnostic_attempts", ["course_id"], unique=False)
    op.create_table(
        "code_submissions",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("exercise_id", sa.String(length=128), nullable=False),
        sa.Column("code", sa.Text(), nullable=False),
        sa.Column("passed", sa.Integer(), nullable=False),
        sa.Column("total", sa.Integer(), nullable=False),
        sa.Column("score", sa.Integer(), nullable=False),
        sa.Column("diff", sa.Text(), nullable=False),
        sa.Column("review", postgresql.JSONB(astext_type=sa.Text()), server_default="[]", nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["exercise_id"], ["exercises.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_code_submissions_user_id", "code_submissions", ["user_id"], unique=False)
    op.create_index("ix_code_submissions_exercise_id", "code_submissions", ["exercise_id"], unique=False)
    op.create_table(
        "lab_environments",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("status", sa.String(length=24), server_default="starting", nullable=False),
        sa.Column("fastapi_container", sa.String(length=120), nullable=True),
        sa.Column("postgres_container", sa.String(length=120), nullable=True),
        sa.Column("network_name", sa.String(length=120), nullable=True),
        sa.Column("host_port", sa.Integer(), nullable=True),
        sa.Column("expires_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id", name="uq_lab_environments_user_id"),
    )
    op.create_index("ix_lab_environments_user_id", "lab_environments", ["user_id"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_lab_environments_user_id", table_name="lab_environments")
    op.drop_table("lab_environments")
    op.drop_index("ix_code_submissions_exercise_id", table_name="code_submissions")
    op.drop_index("ix_code_submissions_user_id", table_name="code_submissions")
    op.drop_table("code_submissions")
    op.drop_index("ix_diagnostic_attempts_course_id", table_name="diagnostic_attempts")
    op.drop_index("ix_diagnostic_attempts_user_id", table_name="diagnostic_attempts")
    op.drop_table("diagnostic_attempts")
    op.drop_table("user_progress")
    op.drop_table("users")
    op.drop_column("exercises", "hidden_test_cases")
