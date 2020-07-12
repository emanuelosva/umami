/**
 * @fileoverview Model schema DB for admin.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const _model = model('Admin', adminSchema, 'admins');

module.exports = _model;
