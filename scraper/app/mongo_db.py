from app import create_app

from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

app = create_app()

load_dotenv()
CONECTION_STRING = os.getenv('CONECTION_STRING')
app.config["MONGO_URI"] = CONECTION_STRING
mongo = PyMongo(app)


def insert_recipe(recipe):
    recipe_collection = mongo.db.recipes
    recipe_collection.insert_one(recipe)
    return "Recipe add with success"


def consult_recipes():
    recipes_names = []
    recipes_in_database = mongo.db.recipes.find()
    for recipe in recipes_in_database:
        recipes_names.append(recipe['name'])
    return  recipes_names

