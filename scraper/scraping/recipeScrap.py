"""Main for Scrapper"""

_URL_HOME ="https://www.recetasnestle.com.co"
_URL_RECETAS = "https://www.recetasnestle.com.co/recetas"

_XPATH_LINKS_CATEGORY_RECIPES = '/html/body//a[@class="category-item"]/@href'
_XPATH_LINKS_RECIPES = '/html/body//div[@class="recipe-item"]//@href'

_XPATH_RECIPE_NAME = '/html/body//h1[@class = "title secondary-font"]/text()'
_XPATH_RECIPE_SERVINGS = '/html/body//div[@class = "cook-detail"]/ul/li[position()=2]/text()' 
_XPATH_RECIPE_TIME = '/html/body//div[@class = "cook-detail"]/ul/li[position()=1]//text()'
_XPATH_RECIPE_INGREDIENTS = '/html/body//div[@class = "col col-ingredients"]//ul/li'
_XPATH_RECIPE_INSTRUCTIONS = '/html/body//div[@class = "col col-instructions"]//ol/li'
_XPATH_RECIPE_IMAGE = '//div[@class = "image"]/img/@data-src'

import re 
from .scrap_fun import get_links, create_url, get_tree

def run_scapper(num_of_recipies=10):
    categories_link = get_links(_URL_RECETAS, _XPATH_LINKS_CATEGORY_RECIPES)
    categories_URL = create_url(_URL_HOME, categories_link)

    recipe_links = []
    for categories_url in categories_URL:
        recipe_links.extend(get_links(categories_url, _XPATH_LINKS_RECIPES))
    
    recipe_links= list(set(recipe_links))
    recipes_URL = create_url(_URL_HOME, recipe_links)

    recipes_dict_dict={}
    id_recipe = 0

    for recipe_url in recipes_URL:
       
        status, recipe_tree = get_tree(recipe_url)
        recipe_dict = { }
        if status:
            recipe_dict["name"] =re.sub(r'\s+',' '," ".join(recipe_tree.xpath(_XPATH_RECIPE_NAME)).strip())
            recipe_dict["servings"] = re.sub(r'\s+',' '," ".join(recipe_tree.xpath(_XPATH_RECIPE_SERVINGS)).strip())
            recipe_dict["time"] = re.sub(r'\s+',' '," ".join(recipe_tree.xpath(_XPATH_RECIPE_TIME)).strip())
            
            ingredients = []
            for li in  recipe_tree.xpath(_XPATH_RECIPE_INGREDIENTS):
                ingredients.append(re.sub(r'\s+',' '," ".join(li.xpath('.//text()')).strip()))
                
            recipe_dict["ingredients"] = ingredients
            
            instructions = []
            for li in  recipe_tree.xpath(_XPATH_RECIPE_INSTRUCTIONS):
                instructions.append(re.sub(r'\s+',' '," ".join(li.xpath('.//p/text()')).strip()))

            recipe_dict["instructions"] = instructions
            recipe_dict["url_img"] = re.sub(r'\s+',' '," ".join(recipe_tree.xpath(_XPATH_RECIPE_IMAGE)))
            recipe_dict["description"] = f"Que delicia no se te antoja preparar {recipe_dict['name']}"
 
        if  recipe_dict:
            id_recipe += 1
            recipes_dict_dict[id_recipe] = recipe_dict
            if id_recipe == num_of_recipies:
                break

    return recipes_dict_dict
