/**
 * @fileoverview Store manage for Recipe
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const storeManage = require('../../store');
const Model = require('./model');

const Store = new storeManage(Model);

// Filter Recipes by key
Store.filter = async function (query) {
  try {
    const data = await this.Model.find(query);
    return data;
  } catch (err) {
    console.log(`[store] -> Error: ${err}`)

    return Promise.reject('Not found');
  }
};

module.exports = Store;
