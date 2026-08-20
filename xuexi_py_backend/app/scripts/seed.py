import json
from pathlib import Path
from typing import Any

from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models import Course, Exercise, Lesson, Stage

SEED_PATH = Path(__file__).resolve().parents[1] / "db" / "seed_data.json"


def upsert(session: Session, model: type[Any], identity: str, values: dict[str, Any]) -> None:
    instance = session.get(model, identity)
    if instance is None:
        session.add(model(id=identity, **values))
        return

    for field, value in values.items():
        setattr(instance, field, value)


def seed() -> None:
    data = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    course_data = data["course"]

    with SessionLocal() as session:
        upsert(
            session,
            Course,
            course_data["id"],
            {
                "title": course_data["title"],
                "description": course_data["description"],
                "is_published": True,
            },
        )

        for stage in data["stages"]:
            upsert(
                session,
                Stage,
                stage["id"],
                {
                    "course_id": course_data["id"],
                    "order": stage["order"],
                    "title": stage["title"],
                    "short_title": stage["shortTitle"],
                    "description": stage["description"],
                    "status": stage["status"],
                },
            )

        for lesson in data["lessons"]:
            upsert(
                session,
                Lesson,
                lesson["id"],
                {
                    "stage_id": lesson["stageId"],
                    "order": lesson["order"],
                    "title": lesson["title"],
                    "subtitle": lesson["subtitle"],
                    "duration": lesson["duration"],
                    "difficulty": lesson["difficulty"],
                    "importance": lesson["importance"],
                    "status": lesson["status"],
                    "one_liner": lesson["oneLiner"],
                    "comparison": lesson["comparison"],
                    "explanation": lesson["explanation"],
                    "common_errors": lesson["commonErrors"],
                    "real_world": lesson["realWorld"],
                    "simulated_output": lesson.get("simulatedOutput"),
                },
            )
            exercise = lesson["exercise"]
            upsert(
                session,
                Exercise,
                f"lesson:{lesson['id']}",
                {
                    "lesson_id": lesson["id"],
                    "source": "lesson",
                    "title": None,
                    "sort_order": lesson["order"],
                    "type": exercise["type"],
                    "prompt": exercise["prompt"],
                    "code": exercise.get("code"),
                    "options": exercise["options"],
                    "answer": exercise["answer"],
                    "explanation": exercise["explanation"],
                },
            )

        for index, challenge in enumerate(data["practiceChallenges"], start=1):
            exercise = challenge["exercise"]
            upsert(
                session,
                Exercise,
                challenge["id"],
                {
                    "lesson_id": challenge["lessonId"],
                    "source": "challenge",
                    "title": challenge["title"],
                    "sort_order": index,
                    "type": exercise["type"],
                    "prompt": exercise["prompt"],
                    "code": exercise.get("code"),
                    "options": exercise["options"],
                    "answer": exercise["answer"],
                    "explanation": exercise["explanation"],
                },
            )

        session.commit()

    print(
        f"Seed 完成：{len(data['stages'])} 个阶段，"
        f"{len(data['lessons'])} 节课，{len(data['practiceChallenges'])} 道额外练习。"
    )


if __name__ == "__main__":
    seed()
