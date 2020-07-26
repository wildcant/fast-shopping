const Joi = require("@hapi/joi");

module.exports = {
  user_schema: Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    id: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string(),
  }),
  email_schema: Joi.string().email({ minDomainSegments: 2 }).required(),
};
