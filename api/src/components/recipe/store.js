/**
 * @fileoverview DB store manage for recipes.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const Model = require('./model');

const list = async () => {
  const data = await Model.find();
  return data;
};

const get = async (id) => {
  const data = await Model.findById(id)
  return data;
};

const add = async (data) => {
  try {
    const newRecipe = new Model(data);
    return newRecipe.save();
  } catch (err) {
    return err
  }
};

const update = async (id, data) => {
  const recipe = await Model.findById(id);

  recipe.name = data.name;
  resipe.tag = data.tag;
  recipe.servings = data.servings;
  recipe.time = data.time;
  recipe.ingredients = data.ingredients;
  recipe.instructions = data.instructions;
  recipe.description = data.description;
  recipe.url_img = data.url_img;

  const updatedRecipe = await recipe.save()
  return updatedRecipe;
};

const remove = async (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  list,
  get,
  add,
  update,
  remove,
};
