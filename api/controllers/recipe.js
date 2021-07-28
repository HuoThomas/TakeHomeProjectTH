const express = require('express');
const router = express.Router();
const { formatResponse } = require('../lib/utils');
const { handlerException } = require('../lib/error');
const dataService = require('../lib/data');
const { route } = require('./status');

/**
 * Route to get all recipes
 */
router.get(
  '/',
  handlerException(async (req, res) => {
    const recipes = await dataService.getAllRecipes();  
    res.json(formatResponse(recipes));
  })
);

/**
 * Route to get recipe by id
 */
router.get(
  '/:id',
  handlerException(async (req, res) => {
    const recipe = await dataService.getRecipeById(req.params.id);
    res.json(formatResponse(recipe));
  })
)

/**
 * Route to update a recipe by id
 */
//IMPLEMENT PUT ROUTE HERE

/**
 * Route to create a recipe
 */
//IMPLEMENT POST ROUTE HERE



module.exports = router;
