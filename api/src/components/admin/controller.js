/**
 * @fileoverview Bussines Logic for admins
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const auth = require('../../auth');
const store = require('./store');

const list = async (filter) => {
  let admin;
  filter
    ? admin = await store.get(filter)
    : admin = await store.list()

  return admin;
};

const add = async (body) => {
  if (!body.user && !body.password) {
    return Promise.reject('Invalid data');
  }

  const admin = {
    user: body.user,
    password: await auth.hash(body.password),
  }

  const newAdmin = await store.add(admin);
  return newAdmin;
}

const update = async (id, body) => {
  if (!id || !body) {
    return Promise.reject('Invalid data');
  }

  const admin = {
    user: body.user,
    password: await auth.hash(body.password),
  }

  return store.update(id, admin);
};

const remove = (id) => {
  if (!id) {
    return Promise.reject('Invalid data');
  }

  return store.remove(id);
};

module.exports = {
  list,
  add,
  update,
  remove,
};
