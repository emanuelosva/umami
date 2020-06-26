from app import create_app

from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

app = create_app()

load_dotenv()
CONECTION_STRING = os.getenv('CONECTION_STRING')
app.config["MONGO_URI"] = CONECTION_STRING
mongo = PyMongo(app)

