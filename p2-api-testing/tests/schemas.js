const Joi = require("joi");

const id = Joi.number().integer()
const name = Joi.string()
const category = Joi.object().keys({
    id: Joi.number().integer(),
    name: Joi.string(),
  })
const photoUrls = Joi.array().items(Joi.string())
const tags = Joi.array().items({
      id: Joi.number().integer(),
      name: Joi.string(),
    })

const status = Joi.string().valid("available", "pending", "sold")

const findPetByStatuSchema = Joi.array().items({
    id: id,
    name: name.required(),
    category: category,
    photoUrls: photoUrls.required(),
    tags: tags,
    status: status,
  });

  const newPetSchema = Joi.object().keys({
    id: id,
    name: name,
    category: category,
    photoUrls: photoUrls,
    tags: tags,
    status: status,
  });

  const updatePetSchema = Joi.object().keys({
    id: id,
    photoUrls: photoUrls,
    tags: tags, 
    status: status,
  });

module.exports = {
    '/pet/findByStatus': findPetByStatuSchema,
    '/pet/newPet': newPetSchema,
    '/pet/updatePet': updatePetSchema
};