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

module.exports = Store;
