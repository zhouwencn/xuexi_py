"""add exercise attempts

Revision ID: 20260823_0007
Revises: 20260823_0006
Create Date: 2026-08-23
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "20260823_0007"
down_revision: str | None = "20260823_0006"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "exercise_attempts",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("exercise_id", sa.String(length=128), nullable=False),
        sa.Column("response", sa.Text(), nullable=False),
        sa.Column("correct", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["exercise_id"], ["exercises.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_exercise_attempts_exercise_id", "exercise_attempts", ["exercise_id"], unique=False)
    op.create_index("ix_exercise_attempts_user_id", "exercise_attempts", ["user_id"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_exercise_attempts_user_id", table_name="exercise_attempts")
    op.drop_index("ix_exercise_attempts_exercise_id", table_name="exercise_attempts")
    op.drop_table("exercise_attempts")
