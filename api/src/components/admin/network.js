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
router.get('/', adminPanel);
router.get('/recipes/new', addRecipeView);
router.post('/recipes/new', addRecipe);
router.get('/recipes/:id', editRecipeView);
router.post('/recipes/:id', editRecipe)

// Callbacks
async function adminPanel(req, res, next) {
  const entities = await controller.getData();

  res.render('adminPanel', { entities });
};

async function addRecipeView(req, res, nex) {
  res.render('addRecipe', { error: null });
};

async function addRecipe(req, res, next) {
  const result = await controller.addRecipe({ ...req.body });

  result
    ? res.redirect('/admin')
    : res.render('addRecipe', {
      error: 'Completa todos los campos requeridos',
    });
};

async function editRecipeView(req, res, next) {
  const data = await controller.getRecipe(req.params.id);

  res.render('editRecipe', {
    recipe: data.recipe,
    error: data.error,
  });
};

async function editRecipe(req, res, next) {
  const result = await controller.editRecipe(req.params.id, { ...req.body });

  result
    ? res.redirect('/admin')
    : res.render('editRecipe', {
      recipe: data.recipe,
      error: 'Problemas al actualizar',
    });
};

module.exports = router;
