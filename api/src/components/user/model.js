/**
 * @fileoverview Model schema DB for recipe.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
  }
});

const _model = model('User', userSchema, 'users');
module.exports = _model;
