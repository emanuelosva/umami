from flask import Blueprint
from .extensions import mongo

mongo_db = Blueprint('mongo_db', __name__)

def add_description(description):
    recipe_ref = mongo.db.collection("recipes").document(recipe_id)
    recipe_ref.add({'description':description})

def add_ingredients(ingredients):
    pass

def add_instructions(instructions):
    pass

def add_name(name):
    pass

def add_servings(servings):
    pass

def add_time(time):
    pass

def add_url_img(url_images):
    pass
