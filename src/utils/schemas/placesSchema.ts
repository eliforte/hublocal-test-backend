import Joi from 'joi';

export const SCHEMAPlaces = Joi.object({
  place: Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().required(),
    address_number: Joi.number().required(),
    complement: Joi.string().allow('').required(),
    cep: Joi.string().required(),
  }).required(),
  responsible: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    address_number: Joi.number().required(),
    phone_number: Joi.number().required(),
    complement: Joi.string().allow('').required(),
    cep: Joi.string().required(),
    is_main_responsable: Joi.boolean().required(),
  }).required(),
  company_id: Joi.string().required(),
});

export const SCHEMAUpdatePlaces = Joi.object({
  name: Joi.string().min(3),
  address: Joi.string(),
  phone_number: Joi.string(),
  address_number: Joi.number(),
  complement: Joi.string(),
  cep: Joi.string(),
});
