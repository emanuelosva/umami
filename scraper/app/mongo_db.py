from .extensions import mongo


def insert_recipe(recipe):
    recipe_collection = mongo.db.recipes
    recipe_collection.insert({'recipe' : recipe})
