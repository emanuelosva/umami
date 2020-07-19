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

Store.filter = async function (query) {
  try {
    const data = await this.Model.find(query);
    return data;
  } catch (err) {
    console.log(`[store] -> Error: ${err}`)

    return Promise.reject('Not found');
  }
};

Store.addShop = async function (username, shop) {
  try {
    const userList = await this.Model.find({ email: username })
    const user = userList[0]

    user.shops.push(shop);
    user.save()
  } catch (err) {
    console.error(`[db] -> Error: ${err}`)
  }
};

module.exports = Store;
