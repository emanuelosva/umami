"""Entry Point for Scrappin-Flask Api"""
from flask import Flask
from app import create_app
from scraping import recipeScrap

app=create_app()

scraping = recipeScrap.run_scapper(num_of_recipies=2)

@app.route('/')
def init():
    values_list = []
    for key, value in scraping.items():
        values_list.append(value)
    
    for item in values_list:
        return item