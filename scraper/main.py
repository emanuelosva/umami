"""Entry Point for Scrappin-Flask Api"""
from flask import Flask, jsonify
from scraping import recipeScrap
from app import create_app


app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def index():

    for key, value in scraping.items():
        recipe = jsonify(value)
        
    return recipe