import pytest
from fastapi.testclient import TestClient

from app.api.routes.courses import lesson_to_schema
from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.db.session import get_session
from app.main import app
from app.models import Course, Exercise, Lab, LabStep, Lesson, Project, ProjectTask, Skill, Stage


class FakeSession:
    def __init__(self, course: Course | None) -> None:
        self.course = course

    def scalar(self, _statement: object) -> Course | None:
        return self.course


def test_catalog_matches_frontend_contract() -> None:
    course = Course(id="python-from-js", title="PyPath", description="Python 学习路线", is_published=True)
    stage = Stage(
        id="foundation",
        course_id=course.id,
        order=1,
        title="第一阶段：Python 基础",
        short_title="Python 基础",
        description="建立语法直觉",
        status="active",
    )
    lesson = Lesson(
        id="what-is-python",
        stage_id=stage.id,
        order=1,
        title="Python 是什么",
        subtitle="建立语言地图",
        duration=6,
        difficulty=1,
        importance="must",
        status="available",
        one_liner="Python 强调可读性。",
        comparison={"javascript": "console.log('hi')", "python": "print('hi')", "note": "输出语法不同。"},
        explanation=[{"code": "print(...) ", "description": "输出内容。"}],
        common_errors=[{"title": "API 混用", "description": "Python 没有 console.log。"}],
        real_world={"title": "脚本入口", "description": "从 main 开始。", "code": "def main(): pass"},
        simulated_output="hi",
    )
    lesson_exercise = Exercise(
        id="lesson:what-is-python",
        lesson_id=lesson.id,
        source="lesson",
        title=None,
        sort_order=1,
        type="choice",
        prompt="Python 如何输出？",
        code=None,
        options=["print", "console.log"],
        answer="print",
        explanation="使用 print。",
    )
    challenge = Exercise(
        id="challenge-output",
        lesson_id=lesson.id,
        source="challenge",
        title="输出练习",
        sort_order=1,
        type="choice",
        prompt="请选择输出函数。",
        code=None,
        options=["print", "echo"],
        answer="print",
        explanation="使用 print。",
    )
    course.stages = [stage]
    stage.lessons = [lesson]
    lesson.exercises = [lesson_exercise, challenge]
    skill = Skill(
        id="python-foundation",
        course_id=course.id,
        stage_id=stage.id,
        order=1,
        title="Python 语法基础",
        description="掌握基础语法",
        level="foundation",
        mastery_threshold=80,
    )
    skill.lessons = [lesson]
    skill.prerequisites = []
    project = Project(
        id="cli-project",
        course_id=course.id,
        order=1,
        title="CLI 项目",
        summary="完成一个 CLI",
        description="项目说明",
        difficulty=2,
        estimated_hours=4,
        status="available",
    )
    project.skills = [skill]
    project.tasks = [
        ProjectTask(
            id="cli-task",
            project_id=project.id,
            order=1,
            title="实现入口",
            description="实现 main",
            acceptance_criteria=["可以运行"],
        )
    ]
    course.skills = [skill]
    course.projects = [project]
    lab = Lab(
        id="testing-lab",
        course_id=course.id,
        order=1,
        title="测试实验",
        summary="练习测试",
        description="实验说明",
        level="advanced",
        kind="engineering",
        estimated_hours=2,
        status="available",
        objectives=["理解 fixture"],
    )
    lab.skills = [skill]
    lab.steps = [
        LabStep(
            id="testing-step",
            lab_id=lab.id,
            order=1,
            title="运行测试",
            instructions="执行 pytest",
            commands=["pytest -q"],
            verification=["测试通过"],
            hints=["先阅读失败信息"],
        )
    ]
    course.labs = [lab]

    app.dependency_overrides[get_session] = lambda: FakeSession(course)
    try:
        response = TestClient(app).get("/api/v1/courses/python-from-js/catalog")
    finally:
        app.dependency_overrides.clear()

    assert response.status_code == 200
    payload = response.json()
    assert payload["code"] == 0
    assert payload["message"] == "success"
    assert payload["data"]["stages"][0]["lessonIds"] == ["what-is-python"]
    assert payload["data"]["lessons"][0]["oneLiner"] == "Python 强调可读性。"
    assert len(payload["data"]["lessons"][0]["exercises"]) == 2
    assert payload["data"]["practiceChallenges"][0]["lessonId"] == "what-is-python"
    assert payload["data"]["skills"][0]["lessonIds"] == ["what-is-python"]
    assert payload["data"]["projects"][0]["tasks"][0]["acceptanceCriteria"] == ["可以运行"]
    assert payload["data"]["labs"][0]["steps"][0]["commands"] == ["pytest -q"]


def test_missing_course_uses_stable_business_code() -> None:
    app.dependency_overrides[get_session] = lambda: FakeSession(None)
    try:
        response = TestClient(app).get("/api/v1/courses/missing-course/catalog")
    finally:
        app.dependency_overrides.clear()

    assert response.status_code == 404
    assert response.json() == {
        "code": ErrorCode.COURSE_NOT_FOUND,
        "message": "课程不存在",
        "data": None,
    }


def test_lesson_without_exercise_raises_question_business_error() -> None:
    lesson = Lesson(id="lesson-without-exercise")
    lesson.exercises = []

    with pytest.raises(BusinessException) as captured:
        lesson_to_schema(lesson)

    assert captured.value.code == ErrorCode.LESSON_EXERCISE_MISSING
    assert captured.value.status_code == 500
