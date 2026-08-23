import os

import psycopg
from fastapi import FastAPI

app = FastAPI(title="PyPath 临时实验环境")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/database-check")
def database_check() -> dict[str, int]:
    with psycopg.connect(os.environ["DATABASE_URL"]) as connection:
        value = connection.execute("SELECT 1").fetchone()
    return {"value": int(value[0])}
