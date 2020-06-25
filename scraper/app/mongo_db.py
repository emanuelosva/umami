from flask import Flask
from flask_pymongo import pymongo

CONECTION_STRING = "mongodb+srv://<username>:<password>@cluster0-cialg.mongodb.net/umami?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONECTION_STRING)
db = client.get_database('db_flaskuser_umami')



def add_description(description):
    recipe_ref = db.collection("recipes").document(recipe_id)
    recipe_ref.add({'description':description})
