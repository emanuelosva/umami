/**
 * @fileoverview Bussines Logic for admins
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const auth = require('../../auth');
const store = require('./store');

const getData = async () => {
  // Get shops
  const recipes = {
    name: 'Recipes',
    items: await store.recipeStore.list(),
  };
  const shops = {
    name: 'Shops',
    items: await store.shopStore.list(),
  };
  const users = {
    name: 'Users',
    items: await store.userStore.list(),
  };
  const admins = {
    name: 'Admins',
    items: await store.adminStore.list(),
  };

  return [
    recipes,
    shops,
    users,
    admins,
  ];
}

module.exports = {
  getData,
};
