from fastapi import APIRouter, Depends, HTTPException

from app.dependencies import get_a, get_b, get_c

router = APIRouter(
    prefix="/orders",
    tags=["orders"],
    dependencies=[Depends(get_a)]
)

@router.get("/",dependencies=[Depends(get_b)])
async def read_orders(q: str = Depends(get_c)):
    return {"orders": [{"order_id": 1}, {"order_id": 2}]}