from flask import Flask
from scrap_fun import run_scapper

app = Flask(__name__)

@app.route('/recipes_scraper')
def get_list_dict_recipes():
    list_dict_recipes = run_scapper()
    return list_dict_recipes

if __name__ == "__main__":
    app.run()