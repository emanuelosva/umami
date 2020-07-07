/**
 * @fileoverview Model schema DB for recipe.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  url_img: {
    type: String,
    required: true,
  },
  url_ingredient: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const _model = model('Recipe', recipeSchema, 'recipes');
module.exports = _model;
