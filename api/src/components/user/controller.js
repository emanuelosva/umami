/**
 * @fileoverview Bussines Logic for users
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const store = require('./store');
const boom = require('@hapi/boom');
const config = require('../../../config');

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
    password: await bcrypt.hash(body.password, 10),
    plan: body.plan,
    shops: [],
    created: new Date(),
    updated: new Date(),
  };

  const newUser = await store.add(user);
  return newUser;
};

const addShop = async (username, shop) => {
  if (!username || !shop) {
    return Promise.reject('No username or id')
  }

  store.addShop(username, shop);
};

const update = async (id, body) => {
  if (!id || !body) {
    return Promise.reject('No id or data')
  }

  let user = {
    name: body.name,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
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

const login = async ({ email, password }) => {
  const [findedUser] = await store.filter({ email });
  if (!findedUser._id) return Promise.reject(boom.unauthorized());

  const hashedPassword = findedUser.password;
  const correctPassword = bcrypt.compare(password, hashedPassword);
  if (!correctPassword) return Promise.reject(boom.unauthorized());

  const payload = {
    sub: findedUser._id,
    email: findedUser.email,
    name: findedUser.name,
    plan: findedUser.plan,
  };

  const token = jwt.sign(payload, config.auth.jwtSecret, {
    expiresIn: '15min'
  });
  return token;
};

module.exports = {
  list,
  add,
  addShop,
  update,
  remove,
  login,
};
