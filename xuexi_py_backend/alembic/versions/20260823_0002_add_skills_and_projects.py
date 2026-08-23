"""add skills, code exercises and projects

Revision ID: 20260823_0002
Revises: 20260821_0001
Create Date: 2026-08-23
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260823_0002"
down_revision: str | None = "20260821_0001"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug', 'code')",
    )
    op.add_column("exercises", sa.Column("difficulty", sa.SmallInteger(), server_default="1", nullable=False))
    op.add_column("exercises", sa.Column("starter_code", sa.Text(), nullable=True))
    op.add_column(
        "exercises",
        sa.Column("test_cases", postgresql.JSONB(astext_type=sa.Text()), server_default="[]", nullable=False),
    )
    op.add_column(
        "exercises",
        sa.Column("hints", postgresql.JSONB(astext_type=sa.Text()), server_default="[]", nullable=False),
    )
    op.create_check_constraint("ck_exercises_difficulty", "exercises", "difficulty BETWEEN 1 AND 5")

    op.create_table(
        "skills",
        sa.Column("id", sa.String(length=96), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("stage_id", sa.String(length=64), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("level", sa.String(length=24), nullable=False),
        sa.Column("mastery_threshold", sa.SmallInteger(), server_default="80", nullable=False),
        sa.CheckConstraint(
            "level IN ('foundation', 'intermediate', 'advanced', 'expert')",
            name="ck_skills_level",
        ),
        sa.CheckConstraint("mastery_threshold BETWEEN 1 AND 100", name="ck_skills_mastery_threshold"),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["stage_id"], ["stages.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_skills_course_id", "skills", ["course_id"], unique=False)
    op.create_index("ix_skills_stage_id", "skills", ["stage_id"], unique=False)

    op.create_table(
        "lesson_skills",
        sa.Column("lesson_id", sa.String(length=96), nullable=False),
        sa.Column("skill_id", sa.String(length=96), nullable=False),
        sa.ForeignKeyConstraint(["lesson_id"], ["lessons.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["skill_id"], ["skills.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("lesson_id", "skill_id"),
    )
    op.create_table(
        "skill_prerequisites",
        sa.Column("skill_id", sa.String(length=96), nullable=False),
        sa.Column("prerequisite_skill_id", sa.String(length=96), nullable=False),
        sa.ForeignKeyConstraint(["skill_id"], ["skills.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["prerequisite_skill_id"], ["skills.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("skill_id", "prerequisite_skill_id"),
    )

    op.create_table(
        "projects",
        sa.Column("id", sa.String(length=96), nullable=False),
        sa.Column("course_id", sa.String(length=64), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("summary", sa.String(length=280), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("difficulty", sa.SmallInteger(), nullable=False),
        sa.Column("estimated_hours", sa.Integer(), nullable=False),
        sa.Column("status", sa.String(length=24), nullable=False),
        sa.CheckConstraint("difficulty BETWEEN 1 AND 5", name="ck_projects_difficulty"),
        sa.CheckConstraint("status IN ('available', 'coming-soon')", name="ck_projects_status"),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_projects_course_id", "projects", ["course_id"], unique=False)
    op.create_table(
        "project_skills",
        sa.Column("project_id", sa.String(length=96), nullable=False),
        sa.Column("skill_id", sa.String(length=96), nullable=False),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["skill_id"], ["skills.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("project_id", "skill_id"),
    )
    op.create_table(
        "project_tasks",
        sa.Column("id", sa.String(length=128), nullable=False),
        sa.Column("project_id", sa.String(length=96), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("starter_code", sa.Text(), nullable=True),
        sa.Column(
            "acceptance_criteria",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default="[]",
            nullable=False,
        ),
        sa.Column("solution_notes", sa.Text(), nullable=True),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_project_tasks_project_id", "project_tasks", ["project_id"], unique=False)


def downgrade() -> None:
    op.drop_index("ix_project_tasks_project_id", table_name="project_tasks")
    op.drop_table("project_tasks")
    op.drop_table("project_skills")
    op.drop_index("ix_projects_course_id", table_name="projects")
    op.drop_table("projects")
    op.drop_table("skill_prerequisites")
    op.drop_table("lesson_skills")
    op.drop_index("ix_skills_stage_id", table_name="skills")
    op.drop_index("ix_skills_course_id", table_name="skills")
    op.drop_table("skills")

    op.drop_constraint("ck_exercises_difficulty", "exercises", type_="check")
    op.drop_column("exercises", "hints")
    op.drop_column("exercises", "test_cases")
    op.drop_column("exercises", "starter_code")
    op.drop_column("exercises", "difficulty")
    op.drop_constraint("ck_exercises_type", "exercises", type_="check")
    op.create_check_constraint(
        "ck_exercises_type",
        "exercises",
        "type IN ('fill', 'choice', 'predict', 'debug')",
    )
