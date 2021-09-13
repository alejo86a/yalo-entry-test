const ValidateWithJoiQueryParams = require("../shared/Validator");
const Joi = require('Joi');

const BlogpostsValidator = {
    request: {
      async get (req, res, next) {
        ValidateWithJoiQueryParams(req, res, next, Joi.object().keys({
                  page: Joi.number().required()
                  // otp: Joi.number().max(9999).min(1000).required()
                }));
      }
    }
  }
  
  module.exports = BlogpostsValidator;