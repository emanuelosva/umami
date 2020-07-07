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
router.get('/', adminPanel)

// Callbacks
async function adminPanel(req, res, next) {
  const data = await controller.getData();
  res.render('adminPanel', { data });
};

module.exports = router;
