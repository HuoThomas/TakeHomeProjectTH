const { setHashKeys } = require('../lib/redis');

const seedData = require('./data.json');

const dataStringified = seedData.reduce((p, c) => {
  return {
    ...p, 
    [c.id]: JSON.stringify(c)
  }
}, {});

setHashKeys(dataStringified)
  .then(res => console.log('completed!'))