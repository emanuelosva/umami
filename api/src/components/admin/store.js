/**
 * @fileoverview Store manage for Admin
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const storeManage = require('../../store');
const Model = require('./model');

const recipeStore = require('../recipe/store');
const userStore = require('../user/store');
const shopStore = require('../shop/store');

const adminStore = new storeManage(Model);

module.exports = {
  adminStore,
  recipeStore,
  userStore,
  shopStore,
};
