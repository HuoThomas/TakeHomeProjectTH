const express = require('express');
const router = express.Router();
const { formatResponse } = require('../lib/utils');
const { handlerException } = require('../lib/error');

router.get(
  '/',
  handlerException(async (req, res) => {
    res.json(formatResponse({
      ping: 'pong'
    }));
  })
);

module.exports = router;
