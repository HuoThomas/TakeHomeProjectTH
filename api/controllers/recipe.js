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
router.put(
  '/:id',
  handlerException(async (req, res) => {
    await dataService.putRecipeById(req.params.id, req.body); 
    const updatedRecipe = await dataService.getRecipeById(req.params.id);
    //res.json(formatResponse(recipe));
    // res.json({
    //     status: 'success'
    // })
    res.json(formatResponse(updatedRecipe));
  })
)

/**
 * Route to create a recipe
 */
//IMPLEMENT POST ROUTE HERE
router.post(
  '/',
  handlerException(async (req, res) => {
    const newRecipeId = await dataService.createRecipe(req.body);
    const newRecipe = await dataService.getRecipeById(newRecipeId);
    res.json(formatResponse((newRecipe)));
  })
)

module.exports = router;