/**
 * @fileoverview DB store manage.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const config = require('../config');

class Store {
  constructor(injectedModel) {
    this.Model = injectedModel
  }

  async list() {
    try {
      const data = await this.Model.find();
      return data;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Not found');
    }
  };

  async get(id) {
    try {
      const data = await this.Model.findById(id);
      return data;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Not found');
    }
  };

  async add(data) {
    try {
      const newEntity = new this.Model(data);
      return newEntity.save();
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };

  async update(id, data) {
    try {
      const entity = await this.Model.findById(id);

      keys = Object.keys(data);
      keys.forEach(item => {
        entity[item] = data[item];
      });

      const updatedEntity = await entity.save();
      return updatedEntity;
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };

  async remove(id) {
    try {
      return this.Model.deleteOne({ _id: id });
    } catch (err) {
      config.enviroment.development
        ? console.log(`[store] -> Error: ${err}`)
        : null;

      return Promise.reject('Internal error');
    }
  };
};

module.exports = Store;
