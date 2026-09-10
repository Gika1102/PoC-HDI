from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from agent import root_agent


app = FastAPI(
    title="Employee Health AI API"
)


# Permite que seu HTML converse com o backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Serviço de sessão do ADK
session_service = InMemorySessionService()


APP_NAME = "employee_health_app"
USER_ID = "demo_user"


runner = Runner(
    agent=root_agent,
    app_name=APP_NAME,
    session_service=session_service
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():

    return {
        "status": "online",
        "message": "Employee Health AI backend running"
    }


@app.post("/chat")
async def chat(request: ChatRequest):

    session_id = "demo_session"

    # Tenta criar a sessão.
    # Se já existir, simplesmente continua.
    try:

        await session_service.create_session(
            app_name=APP_NAME,
            user_id=USER_ID,
            session_id=session_id
        )

    except Exception:
        pass


    user_message = types.Content(
        role="user",
        parts=[
            types.Part(
                text=request.message
            )
        ]
    )


    final_response = ""


    async for event in runner.run_async(

        user_id=USER_ID,

        session_id=session_id,

        new_message=user_message

    ):

        if event.is_final_response():

            if event.content:

                for part in event.content.parts:

                    if part.text:

                        final_response += part.text


    return {
        "response": final_response
    }