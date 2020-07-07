/**
 * @fileoverview Network manage for Recipes.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express();

// Admin router
router.get('/', listAdmin);
// router.post('/', addAdmin);
// router.put('/:id', updateAdmin);
// router.delete('/:id', removeAdmin);

// Callbacks
function listAdmin(req, res, next) {
  const filterAdmin = req.query.admin || null;

  controller.list(filterAdmin)
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

function addAdmin(req, res, next) {
  controller.add(req.body)
    .then(admin => {
      response.success(req, res, admin, 201)
    })
    .catch(next);
};

function updateAdmin(req, res, next) {
  controller.update(req.params.id, req.body)
    .then(admin => {
      response.success(req, res, admin, 201)
    })
    .catch(next);
};

function removeAdmin(req, res, next) {
  controller.remove(req.params.id)
    .then(admin => {
      response.success(req, res, admin, 201)
    })
    .catch(next);
};

module.exports = router;
