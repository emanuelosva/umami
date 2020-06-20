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
router.post('/', addRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', removeRecipe);

// Callbacks
function listRecipe(req, res, next) {
  const filterRecipe = req.query.recipe || null;

  controller.list(filterRecipe)
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

function addRecipe(req, res, next) {
  controller.add(req.body)
    .then(recipe => {
      response.success(req, res, recipe, 201)
    })
    .catch(next);
};

function updateRecipe(req, res, next) {
  controller.update(req.params.id, req.body)
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
