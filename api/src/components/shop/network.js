/**
 * @fileoverview Network manage for Shops.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express();

// Recipes router
router.get('/', listShop);
router.post('/', addShop);
router.delete('/:id', removeShop);

// Callbacks
function listShop(req, res, next) {
  const filterShop = req.query.shop || null;

  controller.list(filterShop)
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

function addShop(req, res, next) {
  controller.add(req.body)
    .then(user => {
      response.success(req, res, user, 201)
    })
    .catch(next);
};


function removeShop(req, res, next) {
  controller.remove(req.params.id)
    .then(shop => {
      response.success(req, res, shop, 201)
    })
    .catch(next);
};

module.exports = router;
