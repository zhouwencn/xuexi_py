import json
from pathlib import Path

SEED_PATH = Path(__file__).resolve().parents[1] / "app" / "db" / "seed_data.json"
LEARNING_SEED_PATH = Path(__file__).resolve().parents[1] / "app" / "db" / "learning_data.json"
ADVANCED_SEED_PATH = Path(__file__).resolve().parents[2] / "content" / "advanced_catalog.json"
EXPERT_SEED_PATH = Path(__file__).resolve().parents[2] / "content" / "expert_lessons.json"
HIDDEN_TESTS_PATH = Path(__file__).resolve().parents[1] / "app" / "db" / "hidden_tests.json"
DIAGNOSTIC_PATH = Path(__file__).resolve().parents[1] / "app" / "db" / "diagnostic_questions.json"


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


def test_learning_seed_data_has_valid_skill_project_and_code_exercise_links() -> None:
    catalog = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    data = json.loads(LEARNING_SEED_PATH.read_text(encoding="utf-8"))
    stage_ids = {stage["id"] for stage in catalog["stages"]}
    lesson_ids = {lesson["id"] for lesson in catalog["lessons"]}
    skill_ids = {skill["id"] for skill in data["skills"]}

    assert len(data["skills"]) == 13
    assert len(data["projects"]) == 3
    assert sum(len(project["tasks"]) for project in data["projects"]) >= 12
    assert len(data["practiceChallenges"]) >= 5
    assert all(skill["stageId"] in stage_ids for skill in data["skills"])
    assert all(set(skill["prerequisiteIds"]) <= skill_ids for skill in data["skills"])
    assert all(set(project["skillIds"]) <= skill_ids for project in data["projects"])
    assert all(challenge["lessonId"] in lesson_ids for challenge in data["practiceChallenges"])
    assert all(challenge["exercise"]["type"] == "code" for challenge in data["practiceChallenges"])
    assert all(challenge["exercise"]["testCases"] for challenge in data["practiceChallenges"])


def test_advanced_catalog_covers_expert_skills_labs_and_question_bank() -> None:
    base = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    learning = json.loads(LEARNING_SEED_PATH.read_text(encoding="utf-8"))
    data = json.loads(ADVANCED_SEED_PATH.read_text(encoding="utf-8"))
    lesson_ids = {lesson["id"] for lesson in base["lessons"]}
    skill_ids = {skill["id"] for skill in [*learning["skills"], *data["skills"]]}
    questions = [*base["practiceChallenges"], *learning["practiceChallenges"], *data["practiceChallenges"]]

    assert len(skill_ids) >= 20
    assert len(data["labs"]) == 12
    assert sum(len(lab["steps"]) for lab in data["labs"]) >= 36
    assert len(questions) >= 40
    assert sum(item["exercise"]["type"] == "code" for item in questions) >= 10
    assert all(set(skill["prerequisiteIds"]) <= skill_ids for skill in data["skills"])
    assert all(set(lab["skillIds"]) <= skill_ids for lab in data["labs"])
    assert all(item["lessonId"] in lesson_ids for item in data["practiceChallenges"])
    assert {item["exercise"]["type"] for item in data["practiceChallenges"]} >= {
        "code",
        "review",
        "incident",
        "design",
    }


def test_expert_lessons_and_hidden_tests_are_complete() -> None:
    expert = json.loads(EXPERT_SEED_PATH.read_text(encoding="utf-8"))
    hidden_tests = json.loads(HIDDEN_TESTS_PATH.read_text(encoding="utf-8"))

    assert expert["stage"]["order"] == 14
    assert len(expert["lessons"]) == 12
    assert len({lesson["id"] for lesson in expert["lessons"]}) == 12
    assert all(lesson["difficulty"] if "difficulty" in lesson else 5 for lesson in expert["lessons"])
    assert all(lesson["skillIds"] for lesson in expert["lessons"])
    assert len(hidden_tests) == 10
    assert all(tests and all(item["code"] for item in tests) for tests in hidden_tests.values())


def test_diagnostic_bank_is_independent_and_complete() -> None:
    catalog = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    questions = json.loads(DIAGNOSTIC_PATH.read_text(encoding="utf-8"))
    lesson_ids = {lesson["id"] for lesson in catalog["lessons"]}
    public_ids = {item["id"] for item in catalog["practiceChallenges"]}

    assert len(questions) == 20
    assert len({item["id"] for item in questions}) == 20
    assert not ({item["id"] for item in questions} & public_ids)
    assert all(item["lessonId"] in lesson_ids for item in questions)
    assert all(item["answer"] in item["options"] for item in questions)
