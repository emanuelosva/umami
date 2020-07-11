/**
 * @fileoverview Bussines Logic for admins
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const auth = require('../../auth');
const store = require('./store');
const recipeController = require('../recipe/controller');

const getData = async () => {
  // Get shops
  const recipes = {
    name: 'Recipes',
    items: await store.recipeStore.list(),
  };
  const shops = {
    name: 'Shops',
    items: await store.shopStore.list(),
  };
  const users = {
    name: 'Users',
    items: await store.userStore.list(),
  };
  const admins = {
    name: 'Admins',
    items: await store.adminStore.list(),
  };

  return [
    recipes,
    shops,
    users,
    admins,
  ];
}

const getRecipe = async (id) => {
  let error;
  let recipe;

  !id
    ? error = 'Problemas al cargar la receta'
    : recipe = await store.recipeStore.get(id)

  return { recipe, error };
};

const addRecipe = async (body) => {
  return await recipeController.add(body);
};

const editRecipe = async (id, body) => {
  return await recipeController.update(id, body);
}

module.exports = {
  getData,
  getRecipe,
  addRecipe,
  editRecipe,
};
