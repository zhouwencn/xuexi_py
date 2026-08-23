import json
from hashlib import sha256
from pathlib import Path
from typing import Any

from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models import Course, Exercise, Lab, LabStep, Lesson, Project, ProjectTask, Skill, Stage

SEED_PATH = Path(__file__).resolve().parents[1] / "db" / "seed_data.json"
LEARNING_SEED_PATH = Path(__file__).resolve().parents[1] / "db" / "learning_data.json"
ADVANCED_SEED_PATH = Path(__file__).resolve().parents[3] / "content" / "advanced_catalog.json"
HIDDEN_TESTS_PATH = Path(__file__).resolve().parents[1] / "db" / "hidden_tests.json"
DIAGNOSTIC_SEED_PATH = Path(__file__).resolve().parents[1] / "db" / "diagnostic_questions.json"
EXPERT_SEED_PATH = Path(__file__).resolve().parents[3] / "content" / "expert_lessons.json"
MASTERY_QUESTIONS_PATH = Path(__file__).resolve().parents[1] / "db" / "python_mastery_questions.json"


def upsert(session: Session, model: type[Any], identity: str, values: dict[str, Any]) -> Any:
    instance = session.get(model, identity)
    if instance is None:
        instance = model(id=identity, **values)
        session.add(instance)
        return instance

    for field, value in values.items():
        setattr(instance, field, value)
    return instance


def spread_answer_position(exercise: dict[str, Any], identity: str) -> dict[str, Any]:
    """稳定打散客观题选项，避免正确答案长期固定在第一个位置。"""
    result = {**exercise}
    options = list(result.get("options", []))
    answer = result.get("answer")
    if len(options) < 2 or answer not in options:
        return result
    options.remove(answer)
    target = int.from_bytes(sha256(identity.encode()).digest()[:2], "big") % (len(options) + 1)
    options.insert(target, answer)
    result["options"] = options
    return result


def deepen_lesson_exercise(lesson: dict[str, Any]) -> dict[str, Any]:
    exercise = {**lesson["exercise"]}
    if not exercise["prompt"].startswith("哪项最准确地描述"):
        return exercise

    misconception = lesson["commonErrors"][0]["description"] if lesson.get("commonErrors") else "代码会自动处理所有异常和边界条件。"
    exercise.update(
        {
            "type": "review",
            "prompt": f"阅读代码并追踪输入、状态变化和返回值。哪项最准确地解释“{lesson['title']}”在这里的主要行为？",
            "code": exercise.get("code") or lesson["comparison"]["python"],
            "options": [
                exercise["answer"],
                misconception,
                "这段写法只改变代码格式，不会影响运行时行为。",
                "解释器会自动修复无效输入，因此调用方不需要处理失败路径。",
            ],
            "explanation": f"{exercise['explanation']} 阅读时还要逐步确认对象引用、控制流、返回值和可能抛出的异常。",
        }
    )
    return exercise


def expand_expert_lesson(source: dict[str, Any], stage_id: str) -> dict[str, Any]:
    return {
        "id": source["id"],
        "stageId": stage_id,
        "order": source["order"],
        "title": source["title"],
        "subtitle": source["subtitle"],
        "duration": source["duration"],
        "difficulty": 5,
        "importance": "must",
        "status": "available",
        "oneLiner": source["oneLiner"],
        "comparison": {
            "javascript": "// 专家阶段不再依赖 JavaScript 语法映射",
            "python": source["code"],
            "note": "从可观察行为、运行机制和工程权衡三个层次理解代码。",
        },
        "explanation": [
            {"code": f"关键点 {index}", "description": description}
            for index, description in enumerate(source["concepts"], start=1)
        ],
        "commonErrors": [{"title": "专家阶段高频误区", "description": source["error"]}],
        "realWorld": {
            "title": "最小验证实验",
            "description": "运行、修改并记录证据，不要只记结论。",
            "code": source["code"],
        },
        "exercise": {
            "type": "choice",
            "prompt": source["question"],
            "options": source["options"],
            "answer": source["answer"],
            "explanation": source["explanation"],
            "difficulty": 5,
        },
        "simulatedOutput": "请运行并记录你的观察",
        "skillIds": source["skillIds"],
    }


def seed() -> None:
    data = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    learning_data = json.loads(LEARNING_SEED_PATH.read_text(encoding="utf-8"))
    advanced_data = json.loads(ADVANCED_SEED_PATH.read_text(encoding="utf-8"))
    hidden_tests = json.loads(HIDDEN_TESTS_PATH.read_text(encoding="utf-8"))
    diagnostic_questions = json.loads(DIAGNOSTIC_SEED_PATH.read_text(encoding="utf-8"))
    expert_data = json.loads(EXPERT_SEED_PATH.read_text(encoding="utf-8"))
    mastery_questions = json.loads(MASTERY_QUESTIONS_PATH.read_text(encoding="utf-8"))
    course_data = data["course"]
    expert_stage = {
        **expert_data["stage"],
        "lessonCount": len(expert_data["lessons"]),
        "lessonIds": [item["id"] for item in expert_data["lessons"]],
    }
    stage_data_list = [*data["stages"], expert_stage]
    expert_lessons = [expand_expert_lesson(item, expert_stage["id"]) for item in expert_data["lessons"]]
    lesson_data_list = [*data["lessons"], *expert_lessons]

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

        for stage in stage_data_list:
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

        for lesson in lesson_data_list:
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
            exercise_id = f"lesson:{lesson['id']}"
            exercise = spread_answer_position(deepen_lesson_exercise(lesson), exercise_id)
            upsert(
                session,
                Exercise,
                exercise_id,
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
                    "difficulty": exercise.get("difficulty", lesson["difficulty"]),
                    "starter_code": exercise.get("starterCode"),
                    "test_cases": exercise.get("testCases", []),
                    "hints": exercise.get("hints", []),
                    "hidden_test_cases": [],
                },
            )

        challenges = [
            *data["practiceChallenges"],
            *learning_data["practiceChallenges"],
            *advanced_data["practiceChallenges"],
            *mastery_questions,
        ]
        for index, challenge in enumerate(challenges, start=1):
            exercise = spread_answer_position(challenge["exercise"], challenge["id"])
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
                    "difficulty": exercise.get("difficulty", 2),
                    "starter_code": exercise.get("starterCode"),
                    "test_cases": exercise.get("testCases", []),
                    "hints": exercise.get("hints", []),
                    "hidden_test_cases": hidden_tests.get(challenge["id"], []),
                },
            )

        for index, question in enumerate(diagnostic_questions, start=1):
            question = {**question, **spread_answer_position(question, question["id"])}
            upsert(
                session,
                Exercise,
                question["id"],
                {
                    "lesson_id": question["lessonId"],
                    "source": "diagnostic",
                    "title": question["title"],
                    "sort_order": index,
                    "type": "choice",
                    "prompt": question["prompt"],
                    "code": question.get("code"),
                    "options": question["options"],
                    "answer": question["answer"],
                    "explanation": question["explanation"],
                    "difficulty": question["difficulty"],
                    "starter_code": None,
                    "test_cases": [],
                    "hints": [],
                    "hidden_test_cases": [],
                },
            )

        skill_instances: dict[str, Skill] = {}
        skill_data_list = [*learning_data["skills"], *advanced_data["skills"]]
        for skill_data in skill_data_list:
            skill = upsert(
                session,
                Skill,
                skill_data["id"],
                {
                    "course_id": course_data["id"],
                    "stage_id": skill_data["stageId"],
                    "order": skill_data["order"],
                    "title": skill_data["title"],
                    "description": skill_data["description"],
                    "level": skill_data["level"],
                    "mastery_threshold": skill_data["masteryThreshold"],
                },
            )
            skill_instances[skill.id] = skill

        session.flush()
        lessons_by_stage: dict[str, list[Lesson]] = {}
        for lesson_data in lesson_data_list:
            lesson = session.get(Lesson, lesson_data["id"])
            if lesson is not None:
                lessons_by_stage.setdefault(lesson.stage_id, []).append(lesson)

        for skill_data in skill_data_list:
            skill = skill_instances[skill_data["id"]]
            skill.lessons = lessons_by_stage.get(skill.stage_id, [])
            skill.prerequisites = [skill_instances[item] for item in skill_data["prerequisiteIds"]]

        for lesson_data in expert_lessons:
            lesson = session.get(Lesson, lesson_data["id"])
            if lesson is None:
                continue
            for skill_id in lesson_data["skillIds"]:
                skill = skill_instances[skill_id]
                if lesson not in skill.lessons:
                    skill.lessons.append(lesson)

        for project_data in learning_data["projects"]:
            project = upsert(
                session,
                Project,
                project_data["id"],
                {
                    "course_id": course_data["id"],
                    "order": project_data["order"],
                    "title": project_data["title"],
                    "summary": project_data["summary"],
                    "description": project_data["description"],
                    "difficulty": project_data["difficulty"],
                    "estimated_hours": project_data["estimatedHours"],
                    "status": project_data["status"],
                },
            )
            project.skills = [skill_instances[item] for item in project_data["skillIds"]]
            for task_data in project_data["tasks"]:
                upsert(
                    session,
                    ProjectTask,
                    task_data["id"],
                    {
                        "project_id": project.id,
                        "order": task_data["order"],
                        "title": task_data["title"],
                        "description": task_data["description"],
                        "starter_code": task_data.get("starterCode"),
                        "acceptance_criteria": task_data["acceptanceCriteria"],
                        "solution_notes": task_data.get("solutionNotes"),
                    },
                )

        for lab_data in advanced_data["labs"]:
            lab = upsert(
                session,
                Lab,
                lab_data["id"],
                {
                    "course_id": course_data["id"],
                    "order": lab_data["order"],
                    "title": lab_data["title"],
                    "summary": lab_data["summary"],
                    "description": lab_data["description"],
                    "level": lab_data["level"],
                    "kind": lab_data["kind"],
                    "estimated_hours": lab_data["estimatedHours"],
                    "status": lab_data["status"],
                    "objectives": lab_data["objectives"],
                },
            )
            lab.skills = [skill_instances[item] for item in lab_data["skillIds"]]
            for step_data in lab_data["steps"]:
                upsert(
                    session,
                    LabStep,
                    step_data["id"],
                    {
                        "lab_id": lab.id,
                        "order": step_data["order"],
                        "title": step_data["title"],
                        "instructions": step_data["instructions"],
                        "commands": step_data["commands"],
                        "verification": step_data["verification"],
                        "hints": step_data["hints"],
                    },
                )

        session.commit()

    print(
        f"Seed 完成：{len(stage_data_list)} 个阶段，"
        f"{len(lesson_data_list)} 节课，{len(challenges)} 道额外练习，"
        f"{len(diagnostic_questions)} 道独立诊断题，"
        f"{len(skill_data_list)} 项技能，{len(learning_data['projects'])} 个项目，"
        f"{len(advanced_data['labs'])} 个工程实验。"
    )


if __name__ == "__main__":
    seed()
