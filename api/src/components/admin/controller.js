/**
 * @fileoverview Bussines Logic for admins
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const storeManage = require('../../store');
const Model = require('./model');

const store = storeManage(Model);

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
    password: body.password
  }

  const newAdmin = await store.add(admin);
  return newAdmin;
}

const update = (id, body) => {
  if (!id || !body) {
    return Promise.reject('Invalid data');
  }

  let admin = {
    user: body.user,
    passwod: body.passwod,
  }

  return store.update(admin);
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
