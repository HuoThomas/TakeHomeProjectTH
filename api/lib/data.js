const { getAllHkeys, getHkey, setHashKey } = require('../lib/redis');
const { v4: uuidv4 } = require('uuid');

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

exports.putRecipeById = async (id, data) => {
  await setHashKey(id, JSON.stringify({id, ...data}));
}

exports.createRecipe = async data => {
  const uuid = uuidv4();
  await setHashKey(uuid, JSON.stringify({id: uuid, ...data}));
  return uuid;
}