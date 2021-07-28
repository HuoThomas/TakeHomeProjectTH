exports.config = {
  apiVersion: process.env.API_VERSION,
  port: process.env.PORT || 3000,
  redis: {
    endpoint: process.env.REDIS_ENDPOINT,
    recipeHkey: process.env.RECIPE_HKEY || 'recipe'
  }
};
