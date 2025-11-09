"""
This file defines the FastAPI app for the API and all of its routes.
To run this API, use the FastAPI CLI
$ fastapi dev src/api.py
"""

import random
import webscrape
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import openai_funcs as gpt

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers =["*"],
)
# The app which manages all of the API routes
app = FastAPI()
openai_client = gpt.initialize_connection()

@app.get("/api/issues")
async def get_ranks(user_input: str, num_of_articles: int):
    output = gpt.get_ranks(openai_client, user_input, num_of_articles)
    #return output
    return gpt.parse_gpt_output(output, num_of_articles)

@app.get("/api/actions")
async def get_actions(user_input: str):
    return webscrape.webscrape(user_input)
