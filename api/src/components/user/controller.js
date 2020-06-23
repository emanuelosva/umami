/**
 * @fileoverview Bussines Logic for users
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const storeManage = require('../../store');
const auth = require('../../auth');
const Model = require('./model');

const store = storeManage(Model);

const list = async (filter) => {
  let user;
  filter
    ? user = await store.get(filter)
    : user = await store.list()

  return user;
};

const add = async (body) => {

  if (!body.name || !body.email || !body.password) {
    return Promise.reject('Invalid data');
  }

  let user = {
    name: body.name,
    email: body.email,
    plan: body.plan,
    password: await auth.hash(body.password),
    created: new Date(),
    updated: new Date(),
  };

  const newUser = await store.add(user);
  return newUser;
};

const update = async (id, body) => {
  if (!id || !body) {
    return Promise.reject('No id or data')
  }

  let user = {
    name: body.name,
    email: body.email,
    password: await auth.hash(body.password),
    plan: body.plan,
    updated: new Date(),
  };

  return store.update(id, user)
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
  update,
  remove,
};
