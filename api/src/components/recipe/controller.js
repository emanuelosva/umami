/**
 * @fileoverview Bussines Logic for users
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const store = require('./store');

const list = async (filter) => {
  let recipe;
  filter
    ? recipe = await store.get(filter)
    : recipe = await store.list()

  return recipe;
};

const add = async (body) => {
  let incompletData = (
    !body.name || !body.tag || !body.servings || !body.time || !body.ingredients
    || !body.instructions || !body.description || !body.url_img
  );

  if (incompletData) {
    return Promise.reject('Invalid data');
  }

  let recipe = {
    name: body.name,
    tag: body.tag,
    servings: body.servings,
    time: body.time,
    ingredients: body.ingredients,
    instructions: body.instructions,
    description: body.description,
    url_img: body.url_img,
    date: new Date(),
  };

  const newRecipe = await store.add(recipe);
  return newRecipe;
};

const update = (id, body) => {
  if (!id || !body) {
    return Promise.reject('No id or data')
  }

  let recipe = {
    name: body.name,
    tag: body.tag,
    servings: body.servings,
    time: body.time,
    ingredients: body.ingredients,
    instructions: body.instructions,
    description: body.description,
    url_img: body.url_img,
  };

  return store.update(id, recipe)
};

const remove = (id) => {
  if (!id) {
    return Promise.reject('No id');
  }

  return store.remove(id);
};

module.exports = {
  list,
  add,
  update,
  remove,
};
