var Joi = require('joi');

module.exports = {
  title: Joi.string().max(100).min(1).required(),
  author: Joi.string().max(100).min(1).required(),
  pages: Joi.number(),
  description: Joi.string().max(1000),
  year: Joi.number(),
  edition: Joi.any()
};
