/**
 * @fileoverview DB store manage for recipes.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const Model = require('./model');
const config = require('../../../config');

const list = async () => {
  try {
    const data = await Model.find();
    return data;
  } catch (err) {
    config.enviroment.development
      ? console.error(`[store] -> Error: ${err}`)
      : null;
    return Promise.reject('Internal error')
  }
};

const get = async (id) => {
  try {
    if (!id) {
      return Promise.reject('Ivalid data');
    }

    const data = await Model.findById(id)
    return data;
  } catch (err) {
    config.enviroment.development
      ? console.error(`[store] -> Error: ${err}`)
      : null;
    return Promise.reject('Not Found')
  }
};

const add = async (data) => {
  try {
    const newRecipe = new Model(data);
    return newRecipe.save();
  } catch (err) {
    config.enviroment.development
      ? console.error(`[store] -> Error: ${err}`)
      : null;
    return Promise.reject('Internal error')
  }
};

const update = async (id, data) => {
  try {
    const recipe = await Model.findById(id);

    recipe.name = data.name;
    recipe.tag = data.tag;
    recipe.servings = data.servings;
    recipe.time = data.time;
    recipe.ingredients = data.ingredients;
    recipe.instructions = data.instructions;
    recipe.description = data.description;
    recipe.url_img = data.url_img;

    const updatedRecipe = await recipe.save()
    return updatedRecipe;
  } catch (err) {
    config.enviroment.development
      ? console.error(`[store] -> Error: ${err}`)
      : null;
    return Promise.reject('Internal error')

  }
};

const remove = async (id) => {
  try {
    return Model.deleteOne({ _id: id });

  } catch (error) {
    config.enviroment.development
      ? console.error(`[store] -> Error: ${err}`)
      : null;
    return Promise.reject('Internal error')

  }
};

module.exports = {
  list,
  get,
  add,
  update,
  remove,
};
