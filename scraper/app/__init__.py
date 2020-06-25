from flask import Flask 

from .extensions import mongo

def create_app(configuration_object='.mongo_settings'):
    app = Flask(__name__)

    app.config.from_object(config_object)

    mongo.init_app(app)
    
    return app