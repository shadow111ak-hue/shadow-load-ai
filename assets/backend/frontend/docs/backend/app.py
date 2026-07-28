from fastapi import FastAPI

app = FastAPI(title="AI Cooking API")

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Cooking API 🚀"
    }
