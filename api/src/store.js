/**
 * @fileoverview DB store manage.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const config = require('../config');

function store(injectedModel) {

  const Model = injectedModel


  const list = async () => {
    try {
      const data = await Model.find();
      return data;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Not found');
    }
  };

  const get = async (id) => {
    try {
      const data = await Model.findById(id);
      return data;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Not found');
    }
  };

  const add = async (data) => {
    try {
      const newAdmin = new Model(data);
      return newAdmin.save();
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };

  const update = async (id, data) => {
    try {
      const admin = await Model.findById(id);

      keys = Object.keys(data);
      keys.forEach(item => {
        admin[item] = data[item];
      });

      const updatedAdmin = await admin.save();
      return updatedAdmin;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };

  const remove = async (id) => {
    try {
      return Model.deleteOne({ _id: id });
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };

  return {
    list,
    get,
    add,
    update,
    remove
  };
};

module.exports = store;
