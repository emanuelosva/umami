"""Entry Point for Scrappin-Flask Api"""
from flask import Flask
from app import create_app
from scrapping import SCRAPPING

app=create_app()

scrapping = SCRAPPING

@app.route('/')
def init():
    values_list = []
    for key, value in scrapping.items():
        values_list.append(value)
    
    for item in values_list:
        return item



