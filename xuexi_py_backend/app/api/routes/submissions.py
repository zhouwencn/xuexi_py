from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import get_current_user
from app.db.session import get_session
from app.models import CodeSubmission, Exercise, User
from app.schemas.account import CodeSubmissionCreate, CodeSubmissionRead, TestResultRead
from app.schemas.response import ApiResponse, success_response
from app.services.code_execution import ExecutionFailedError, ExecutionResult, ExecutionUnavailableError, run_python_tests
from app.services.review import build_code_diff, review_python_code

router = APIRouter(prefix="/exercises", tags=["submissions"])


def result_schemas(result: ExecutionResult, *, hidden: bool) -> list[TestResultRead]:
    return [
        TestResultRead(
            name=f"隐藏测试 {index}" if hidden else item["name"],
            passed=item["passed"],
            error="" if hidden else item.get("error", ""),
        )
        for index, item in enumerate(result.results, start=1)
    ]


@router.post("/{exercise_id}/submissions", response_model=ApiResponse[CodeSubmissionRead])
def submit_code(
    exercise_id: str,
    payload: CodeSubmissionCreate,
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[CodeSubmissionRead]:
    exercise = session.get(Exercise, exercise_id)
    if exercise is None or exercise.type != "code":
        raise BusinessException(ErrorCode.EXERCISE_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)
    uses_hidden_tests = bool(exercise.hidden_test_cases)
    tests = exercise.hidden_test_cases or exercise.test_cases
    try:
        result = run_python_tests(payload.code, tests)
    except ExecutionUnavailableError as exc:
        raise BusinessException(ErrorCode.CODE_EXECUTION_DISABLED, status_code=status.HTTP_503_SERVICE_UNAVAILABLE) from exc
    except ExecutionFailedError as exc:
        raise BusinessException(ErrorCode.CODE_EXECUTION_FAILED, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY) from exc
    score = round(result.passed / result.total * 100) if result.total else 0
    submission = CodeSubmission(
        user_id=user.id,
        exercise_id=exercise.id,
        code=payload.code,
        passed=result.passed,
        total=result.total,
        score=score,
        diff=build_code_diff(exercise.answer, payload.code),
        review=review_python_code(payload.code),
    )
    session.add(submission)
    session.commit()
    session.refresh(submission)
    return success_response(CodeSubmissionRead(
        id=submission.id,
        exercise_id=exercise.id,
        passed=submission.passed,
        total=submission.total,
        score=submission.score,
        results=result_schemas(result, hidden=uses_hidden_tests),
        diff=submission.diff,
        review=submission.review,
        created_at=submission.created_at,
    ))


@router.get("/{exercise_id}/submissions", response_model=ApiResponse[list[CodeSubmissionRead]])
def submission_history(
    exercise_id: str,
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[list[CodeSubmissionRead]]:
    items = session.scalars(
        select(CodeSubmission)
        .where(CodeSubmission.user_id == user.id, CodeSubmission.exercise_id == exercise_id)
        .order_by(CodeSubmission.created_at.desc())
        .limit(20)
    ).all()
    return success_response([
        CodeSubmissionRead(
            id=item.id, exercise_id=item.exercise_id, passed=item.passed, total=item.total,
            score=item.score, results=[], diff=item.diff, review=item.review, created_at=item.created_at,
        )
        for item in items
    ])
