/**
 * @fileoverview Bussines Logic for admins
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const bycrypt = require('bcrypt');
const basicStrategy = require('../../auth/strategys/basic');
const store = require('./store');
const recipeController = require('../recipe/controller');

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
  ];

  // Simple Metric (Number of elements)
  const metrics = [];
  entities.forEach(item => {
    metrics.push({
      name: item.name,
      count: item.items.length,
    });
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
    : recipe = await store.recipeStore.get(id);
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

const addAdmin = async (body) => {
  if (!body.user || !body.password) {
    return Promise.reject('Invalid data');
  }

  const admin = {
    user: body.user,
    password: await bycrypt.hash(body.password),
  };
  const newAdmin = await store.adminStore.add(admin);
  return newAdmin;
};

const getAdmin = async (id) => {
  let error;
  const admin = await store.adminStore.get(id);

  if (admin) return { admin, error };
  return { admin, error: 'No se encontró ninguna coincidencia' };
};

const editAdmin = async (id, body) => {
  if (!id || !body) {
    return Promise.reject('No id or data')
  }

  let admin = {
    user: body.user,
    password: await bycrypt.hash(body.password),
  };
  return await store.adminStore.update(id, admin)
};

const loginAdmin = async (body, req) => {
  try {
    const authorized = await basicStrategy(body, req);
    console.log(authorized)
    return authorized;
  }
  catch (error) {
    console.error(`[adminController] -> ${error}`)
    return false
  }
};

const logoutAdmin = (req) => {
  req.session = null;
};

module.exports = {
  getData,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  addAdmin,
  getAdmin,
  editAdmin,
  loginAdmin,
  logoutAdmin,
};
