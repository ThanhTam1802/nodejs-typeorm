const Joi = require('@hapi/joi');


export const customerSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(3),

  lastName: Joi.string()
    .alphanum(),

  address: Joi.string()
    .min(5)
});

