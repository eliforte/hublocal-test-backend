import Joi from 'joi';

export const SCHEMAPlaces = Joi.object({
  places: Joi.array().items({
    name: Joi.string().min(3).required(),
    address: Joi.string().required(),
    phone_number: Joi.string().required(),
    address_number: Joi.number().required(),
    complement: Joi.string().required(),
    cep: Joi.string().required(),
  }).required(),
  responsibles: Joi.array().items({
    full_name: Joi.string().min(5).required(),
    address: Joi.string().required(),
    address_number: Joi.number().required(),
    complement: Joi.string().required(),
    is_main_responsable: Joi.boolean().required(),
  }).required(),
});

export const SCHEMAUpdatePlaces = Joi.object({
  name: Joi.string().min(3),
  address: Joi.string(),
  phone_number: Joi.string(),
  address_number: Joi.number(),
  complement: Joi.string(),
  cep: Joi.string(),
});
