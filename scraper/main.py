"""Entry Point for Scrappin-Flask Api"""
from flask import Flask, jsonify
from app import create_app
from scraping import recipeScrap
from app.mongo_db import add_description

app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def init():
    values_list = []
    descriptions = []
    ingredients = []
    descriptions_group = []

    for key, value in scraping.items():
        values_list.append(value)
        
        for recipe in values_list:
            descriptions.append(recipe['description'])
    
    for description in descriptions:
        return description
