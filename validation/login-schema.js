var Joi = require('joi');

module.exports = {
  username: Joi.string().max(40).min(2).required(),
  password: Joi.string().max(80).min(5).required()
};
