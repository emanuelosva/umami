"""Entry Point for Scrappin-Flask Api"""
from scraping import recipeScrap
from app import create_app
from app.mongo_db import insert_recipe, consult_recipes


app=create_app()
scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def index():
    recipes_exists = consult_recipes()
    counter = 0
    for key, value in scraping.items():
        recipe = value
        if recipe['name'] not in recipes_exists:
            insert_recipe(recipe)
            counter += 1
        
    return f'OK   Add {counter} recipes'