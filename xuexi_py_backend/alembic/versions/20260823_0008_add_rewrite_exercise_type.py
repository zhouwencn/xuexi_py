"""add rewrite exercise type

Revision ID: 20260823_0008
Revises: 20260823_0007
Create Date: 2026-08-23
"""

from collections.abc import Sequence

from alembic import op

revision: str = "20260823_0008"
down_revision: str | None = "20260823_0007"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug', 'code', 'review', 'rewrite', 'incident', 'design')",
    )


def downgrade() -> None:
    op.execute("UPDATE exercises SET type = 'review' WHERE type = 'rewrite'")
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug', 'code', 'review', 'incident', 'design')",
    )
