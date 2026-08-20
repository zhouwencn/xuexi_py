from app.schemas.course import StageRead


def test_api_schema_uses_frontend_camel_case_fields() -> None:
    stage = StageRead(
        id="foundation",
        order=1,
        title="第一阶段：Python 基础",
        short_title="Python 基础",
        description="建立语法直觉",
        lesson_count=18,
        status="active",
        lesson_ids=["what-is-python"],
    )

    payload = stage.model_dump(by_alias=True)

    assert payload["shortTitle"] == "Python 基础"
    assert payload["lessonCount"] == 18
    assert payload["lessonIds"] == ["what-is-python"]
