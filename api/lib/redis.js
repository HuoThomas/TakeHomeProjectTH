const redis = require('redis');
const { config } = require('../config');

exports.getKeys = hash => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({ host: config.redis.endpoint });
    redisClient.hget(config.redis.recipeHkey, id, (err, data) => {
      redisClient.quit();
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

exports.setHashKeys = values => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({ host: config.redis.endpoint });
    //console.log(config.redis.recipeHkey, values)
    redisClient.hmset(config.redis.recipeHkey, values, (err, data) => {
      redisClient.quit();
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

exports.setHashKey = (name, value) => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({ host: config.redis.endpoint });
    redisClient.hget(config.redis.recipeHkey, name, value, (err, data) => {
      redisClient.quit();
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

exports.getAllHkeys = () => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({ host: config.redis.endpoint });
    redisClient.hgetall(config.redis.recipeHkey, (err, data) => {
      redisClient.quit();
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

exports.getHkey = id => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({ host: config.redis.endpoint });
    redisClient.hget(config.redis.recipeHkey, id, (err, data) => {
      redisClient.quit();
      if (err) return reject(err);
      return resolve(data);
    });
  });
}