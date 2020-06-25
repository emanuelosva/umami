"""Entry Point for Scrappin-Flask Api"""
from flask import Flask, jsonify, redirect, url_for
from app import create_app
from scraping import recipeScrap
from app.mongo_db import insert_recipe

app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def init():

    for key, recipe in scraping.items():     
        insert_recipe(recipe)    
    
    return "OK"