"""Entry Point for Scrappin-Flask Api"""
from flask import Flask, jsonify, redirect, url_for
from app import create_app
from scraping import recipeScrap
from app.mongo_db import add_description

app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def init():

    descriptions = []
    ingredients = []
    instructions = []
    names = []
    servings = []
    times = []
    url_images = []
    descriptions_group = []

    for key, value in scraping.items():     
        descriptions.append(value["description"])
        ingredients.append(value["ingredients"])
        instructions.append(value["instructions"])
        names.append(value["name"])
        servings.append(value["servings"])
        times.append(value["time"])
        url_images.append(value["url_img"])

        
    for ingredient in ingredients:
        return jsonify(ingredient)