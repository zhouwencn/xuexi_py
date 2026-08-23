"""remove duplicate user email index

Revision ID: 20260823_0005
Revises: 20260823_0004
Create Date: 2026-08-23
"""

from collections.abc import Sequence

from alembic import op

revision: str = "20260823_0005"
down_revision: str | None = "20260823_0004"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.execute("DROP INDEX IF EXISTS ix_users_email")


def downgrade() -> None:
    op.execute("CREATE UNIQUE INDEX IF NOT EXISTS ix_users_email ON users (email)")
