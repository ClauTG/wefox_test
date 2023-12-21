const Joi = require("joi");

const category = Joi.object().keys({
    id: Joi.number().integer(),
    name: Joi.string(),
  })
const photoUrls = Joi.array().items(Joi.string())

const findPetByStatuSchema = Joi.array().items({
    id: Joi.number().integer(),
    name: Joi.string().required(),
    category: category,
    photoUrls: photoUrls.required(),
    tags: Joi.array().items({
      id: Joi.number().integer(),
      name: Joi.string(),
    }),
    status: Joi.string().valid("available", "pending", "sold"),
  });

module.exports = {
    '/pet/findByStatus': findPetByStatuSchema
};