/**
 * @fileoverview Network manage for Recipes.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const express = require('express');
const cockieSession = require('cookie-session');
const config = require('../../../config');
const controller = require('./controller');
const { basicAuth } = require('../../auth/middleware');

const router = express();

//Router auth configuration
router.set('trust proxy', 1)
router.use(cockieSession({
  name: 'session',
  secret: config.auth.sessionSecret,
  maxAge: 1000 * 60 * 60,
  path: '/admin',
  secure: process.env.NODE_ENV === 'production',
}));

// Admin router
router.get('/', basicAuth, adminPanel);
router.get('/recipes/new', basicAuth, addRecipeView);
router.get('/recipes/:id', basicAuth, editRecipeView);
router.get('/recipes/delete/:id', basicAuth, deleteRecipe);
router.get('/new', basicAuth, addAdminView);
router.get('/edit/:id', basicAuth, editAdminView)
router.get('/login', loginView);
router.post('/new', basicAuth, addAdmin);
router.post('/edit/:id', basicAuth, editAdmin);
router.post('/recipes/new', basicAuth, addRecipe);
router.post('/recipes/:id', basicAuth, editRecipe);
router.post('/login', login);
router.get('/logout', logout);

// --- Callbacks ---

// For admin
async function adminPanel(req, res, next) {
  const { entities, metrics } = await controller.getData();

  res.render('adminPanel', {
    entities,
    metrics,
    user: req.session.user,
  });
};

async function addAdminView(req, res, next) {
  res.render('addAdmin', { error: null });
};

async function addAdmin(req, res, next) {
  const result = await controller.addAdmin({ ...req.body });

  result
    ? res.redirect('/admin')
    : res.render('addRecipe', {
      error: 'Error al crear nuevo Admin'
    });
};

async function editAdminView(req, res, next) {
  const data = await controller.getAdmin(req.params.id);

  res.render('editAdmin', {
    admin: data.admin,
    error: data.error,
  });
};

async function editAdmin(req, res, next) {
  const result = await controller.editAdmin(req.params.id, { ...req.body });

  result
    ? res.redirect('/admin/logout')
    : res.render('editAdmin', {
      error: 'Error al actualizar',
    });
};

// For recipes
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

async function deleteRecipe(req, res, next) {
  const result = await controller.deleteRecipe(req.params.id);

  result
    ? res.redirect('/admin')
    : res.render('adminPanel', { erro: 'Problemas al borrar' })
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

// Admin auth
async function loginView(req, res, next) {
  res.render('login');
};

async function login(req, res, next) {
  const body = { ...req.body };
  const authorized = await controller.loginAdmin(body, req);

  authorized
    ? res.redirect('/admin')
    : res.render('login', {
      error: 'Credenciales invalidas'
    });
};

async function logout(req, res, next) {
  controller.logoutAdmin(req);
  res.redirect('/admin/login');
};

module.exports = router;
