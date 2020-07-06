"""Entry Point for Scrappin-Flask Api"""
from scraping import recipeScrap
from app import create_app
from app.mongo_db import insert_recipe, consult_recipes


app=create_app()
scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def index():

    for key, value in scraping.items():
        recipe = value
        insert_recipe(recipe)
        
    return "Ok"