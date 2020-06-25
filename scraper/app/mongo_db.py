from .extensions import mongo


def insert_recipe(recipe):
    recipe = mongo.db.collection("recipes")
    recipe.insert({'recipe' : recipe})
