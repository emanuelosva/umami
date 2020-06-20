/**
 * @fileoverview Model schema DB for recipe.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipe: {
    type: Schema.ObjectId,
    ref: 'Recipe',
  },
  name: {
    type: String,
    required: true,
  },
  tag: {
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
    type: Object,
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
  date: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model('Recipe', recipeSchema, 'recipes');
module.exports = model;
