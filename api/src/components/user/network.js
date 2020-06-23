/**
 * @fileoverview Network manage for Users.
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
router.get('/', listUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

// Callbacks
function listUser(req, res, next) {
  const filterUser = req.query.user || null;

  controller.list(filterUser)
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

function addUser(req, res, next) {
  controller.add(req.body)
    .then(user => {
      response.success(req, res, user, 201)
    })
    .catch(next);
};

function updateUser(req, res, next) {
  controller.update(req.params.id, req.body)
    .then(user => {
      response.success(req, res, user, 201)
    })
    .catch(next);
};

function removeUser(req, res, next) {
  controller.remove(req.params.id)
    .then(user => {
      response.success(req, res, user, 201)
    })
    .catch(next);
};

module.exports = router;
