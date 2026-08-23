"""add diagnostic exercise source

Revision ID: 20260823_0006
Revises: 20260823_0005
Create Date: 2026-08-23
"""

from collections.abc import Sequence

from alembic import op

revision: str = "20260823_0006"
down_revision: str | None = "20260823_0005"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.drop_constraint("ck_exercises_source", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_source",
        "exercises",
        "source IN ('lesson', 'challenge', 'diagnostic')",
    )


def downgrade() -> None:
    op.execute("DELETE FROM exercises WHERE source = 'diagnostic'")
    op.drop_constraint("ck_exercises_source", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_source",
        "exercises",
        "source IN ('lesson', 'challenge')",
    )
