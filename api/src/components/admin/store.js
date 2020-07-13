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

// Filter admin by user
adminStore.filter = async function (query) {
  try {
    const data = await this.Model.find(query);
    return data;
  } catch (err) {
    console.log(`[store] -> Error: ${err}`)

    return Promise.reject('Not found');
  }
};

module.exports = {
  adminStore,
  recipeStore,
  userStore,
  shopStore,
};
