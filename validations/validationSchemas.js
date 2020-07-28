const Joi = require("@hapi/joi");

module.exports = {
  user_schema: Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    id: Joi.number().required(),
    address: Joi.string().required(),
    phone: Joi.string(),
  }),
  order_schema: Joi.object({
    id_user: Joi.number().required(),
    id_order: Joi.string().required(),
    total_price: Joi.number().required(),
    products: Joi.array()
      .items(
        Joi.object({
          id_product: Joi.string(),
          quantity: Joi.number(),
        })
      )
      .required(),
  }),
};
