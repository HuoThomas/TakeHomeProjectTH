const { config } = require("../config");

exports.formatResponse = data => {
  return {
    apiVersion: config.apiVersion,
    data
  }
}