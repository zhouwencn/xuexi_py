import json
from pathlib import Path

SEED_PATH = Path(__file__).resolve().parents[1] / "app" / "db" / "seed_data.json"


def test_seed_data_relationships_are_complete() -> None:
    data = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    stages = data["stages"]
    lessons = data["lessons"]
    challenges = data["practiceChallenges"]

    stage_ids = {stage["id"] for stage in stages}
    lesson_ids = {lesson["id"] for lesson in lessons}

    assert len(stages) == 13
    assert len(lessons) == 132
    assert len(lesson_ids) == len(lessons)
    assert len(challenges) == 10
    assert all(lesson["stageId"] in stage_ids for lesson in lessons)
    assert all(challenge["lessonId"] in lesson_ids for challenge in challenges)
    assert all(
        stage["lessonCount"] == sum(lesson["stageId"] == stage["id"] for lesson in lessons)
        for stage in stages
    )
    for stage in stages:
        stage_orders = [lesson["order"] for lesson in lessons if lesson["stageId"] == stage["id"]]
        assert len(stage_orders) == len(set(stage_orders))
