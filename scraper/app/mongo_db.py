from flask import Flask
from flask_pymongo import pymongo

CONECTION_STRING = "mongodb+srv://<username>:<password>@cluster0-cialg.mongodb.net/umami?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONECTION_STRING)
db = client.get_database('db_flaskuser_umami')



def add_description(description):
    recipe_ref = db.collection("recipes").document(recipe_id)
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

def add_url_img(url_image):
    pass
