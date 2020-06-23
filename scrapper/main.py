"""Entry Point for Scrappin-Flask Api"""
from flask import Flask
from scrapping import SCRAPPING

app=Flask(__name__)

scrapping = SCRAPPING

@app.route('/')
def init():
    values_list = []
    for key, value in scrapping.items():
        values_list.append(value)
    
    for item in values_list:
        return item