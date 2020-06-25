"""Entry Point for Scrappin-Flask Api"""
from flask import Flask, jsonify, redirect, url_for
from app import create_app
from scraping import recipeScrap
from app.mongo_db import add_description

app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def init():
    recipes_list = []
    descriptions = []
    ingredients = []
    instructions = []
    names = []
    servings = []
    times = []
    url_images = []
    descriptions_group = []

    for key, value in scraping.items():
        recipes_list.append(value)       
        descriptions.append(value["description"])
        ingredients.append(value["ingredients"])
        instructions.append(value["instructions"])

        
    for ingredient in ingredients:
        return jsonify(ingredient)