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

// Recipes router
router.get('/', listRecipe);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', removeRecipe);

// Callbacks
function listRecipe(req, res, next) {
  controller.list()
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

function createRecipe(req, res, next) {
  controller.create(req.body)
    .then(recipe => {
      response.success(req, res, recipe, 201)
    })
    .catch(next);
};

function updateRecipe(req, res, next) {
  controller.update(req.params.id)
    .then(recipe => {
      response.success(req, res, recipe, 201)
    })
    .catch(next);
};

function removeRecipe(req, res, next) {
  controller.remove(req.params.id)
    .then(recipe => {
      response.success(req, res, recipe, 201)
    })
    .catch(next);
};

module.exports = router;
