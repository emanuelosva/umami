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
const { count } = require('./model');

const getData = async () => {
  // Get Principale data
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

  const entities = [
    recipes,
    shops,
    users,
    admins,
  ]

  // Simple Metric (Number of elements)
  const metrics = {};
  entities.forEach(item => {
    metrics[item.name] = item.items.length;
  });

  return {
    entities: entities,
    metrics: metrics,
  }
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

const deleteRecipe = async (id) => {
  return await recipeController.remove(id);
};

module.exports = {
  getData,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
