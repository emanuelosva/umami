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

import random
import re 
from .scrap_fun import get_links, create_url, get_tree

def run_scapper(num_of_recipies=10):
    #categories_link = get_links(_URL_RECETAS, _XPATH_LINKS_CATEGORY_RECIPES)
    categories_URL = [
                      "https://www.recetasnestle.com.co/categorias/pastas",
                      "https://www.recetasnestle.com.co/categorias/sopas-y-cremas",
                      "https://www.recetasnestle.com.co/categorias/granos",
                      "https://www.recetasnestle.com.co/categorias/arroz",
                      "https://www.recetasnestle.com.co/categorias/carnes",
                      "https://www.recetasnestle.com.co/categorias/pescado",
                      "https://www.recetasnestle.com.co/categorias/pollo" ,
                      "https://www.recetasnestle.com.co/categorias/con-vegetales",
                      "https://www.recetasnestle.com.co/categorias/postres-faciles",
                      "https://www.recetasnestle.com.co/categorias/base-de-leche",
                      "https://www.recetasnestle.com.co/categorias/flan-pudding",
                      "https://www.recetasnestle.com.co/categorias/tortas-y-ponques",
                      "https://www.recetasnestle.com.co/categorias/chocolate"

                    ] 
    
    recipe_links = []

    for categories_url in categories_URL:

        categoria = categories_url.split("/")[-1] 
        
        if categoria in {"pastas" }:
            categoria = "Pastas"
        elif categoria in {"sopas-y-cremas"}:
            categoria = "Sopas y Cremas"
        elif categoria in {"granos", "arroz"}:
            categoria = "Granos"
        elif categoria in {"con-vegetales"}:
            categoria = "Vegtariana"
        elif categoria in {"carnes", "pescado",  "pollo" }:
            categoria = "Carnes"
        elif categoria in {"postres-faciles", "base-de-leche", "flan-pudding", "tortas-y-ponques", "chocolate" }:
            categoria = "Postres"

        recipe_category = create_url(_URL_HOME, get_links(categories_url, _XPATH_LINKS_RECIPES))
        category_list = [categoria]*len(recipe_category)
        recipe_links.extend(list(zip(recipe_category , category_list)))
                
    
    recipe_links = list(set(recipe_links))
    
    recipes_dict_dict={}
    id_recipe = 0

    for recipe_url in recipe_links:
        
        status, recipe_tree = get_tree(recipe_url[0])
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
            recipe_dict["description"] = f"Que delicia no se te antoja preparar  {recipe_dict['name']}"
            recipe_dict["price"] = str(round(random.uniform(1.5 , 20), 2))

            recipe_dict["category"] = recipe_url[1]
 
        if  recipe_dict:
            id_recipe += 1
            recipes_dict_dict[id_recipe] = recipe_dict
            if id_recipe == num_of_recipies:
                break

    return recipes_dict_dict
