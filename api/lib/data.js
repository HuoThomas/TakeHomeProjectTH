const { getAllHkeys, getHkey } = require('../lib/redis');

exports.getAllRecipes = async () => {
  const recipes = await getAllHkeys();
  return Object.keys(recipes).map(r => ({
    ...JSON.parse(recipes[r])
  }));
}

exports.getRecipeById = async id => {
  const recipe = await getHkey(id);
  return JSON.parse(recipe);
}