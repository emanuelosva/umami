"""Entry Point for Scrappin-Flask Api"""
from flask import Flask


app=Flask(__name__)

@app.route('/')
def init():
    return('Hello world')