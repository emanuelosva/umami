/**
 * @fileoverview Model schema DB for shops.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const { model, Schema } = require('mongoose');

const shopSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const _model = model('Shop', shopSchema, 'shops');
module.exports = _model;
