FROM python:3.12-slim

RUN pip install --no-cache-dir "fastapi>=0.115,<1" "uvicorn[standard]>=0.34,<1" "psycopg[binary]>=3.2,<4"
WORKDIR /app
COPY main.py /app/main.py
USER 65534:65534
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
