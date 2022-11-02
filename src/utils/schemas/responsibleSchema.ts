import Joi from 'joi'

export const SCHEMAResponsible = Joi.object({
  company_id: Joi.string(),
  place_id: Joi.string(),
  full_name: Joi.string().required(),
  address: Joi.string().required(),
  address_number: Joi.number().required(),
  phone_number: Joi.number().required(),
  complement: Joi.string().allow('').required(),
  cep: Joi.string().required(),
  is_main_responsable: Joi.boolean().required(),
});

export const SCHEMAUpdateResponsible = Joi.object({
  company_id: Joi.string(),
  place_id: Joi.string(),
  full_name: Joi.string(),
  address: Joi.string(),
  address_number: Joi.number(),
  phone_number: Joi.number(),
  complement: Joi.string().allow(''),
  cep: Joi.string(),
  is_main_responsable: Joi.boolean(),
});
