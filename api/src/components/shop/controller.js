/**
 * @fileoverview Bussines Logic for shop
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const store = require('./store');

const list = async (filter) => {
  let recipe;
  filter
    ? recipe = await store.get(filter)
    : recipe = await store.list()

  return recipe;
};

const add = async (body) => {
  let incompletData = (
    !body.username || !body.recipe || !body.cost
  );

  if (incompletData) {
    return Promise.reject('Invalid data');
  }

  let shop = {
    username: body.username,
    recipe: body.recipe,
    cost: body.cost,
    date: new Date(),
  };

  const newShop = await store.add(shop);
  return newShop;
};

const remove = (id) => {
  if (!id) {
    return Promise.reject('No id');
  }

  return store.remove(id);
};

module.exports = {
  list,
  add,
  remove,
};
