/**
 * @fileoverview Bussines Logic for users
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const nonoid = require('nanoid').nanoid;
const store = require('./store');

const list = async (filter) => {
  let recipe;
  filter
    ? recipe = await store.get(filter)
    : recipe = await store.list()

  return recipe;
};

const add = (body) => {
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

  body.id
    ? recipe.id = body.id
    : recipe.id = nonoid();

  return store.add(recipe);
};

const update = (id, body) => {
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
  return store.remove(id);
};

module.exports = {
  list,
  add,
  update,
  remove,
};
