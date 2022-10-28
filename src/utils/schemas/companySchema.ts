import Joi from 'joi';

export const SCHEMACompany = Joi.object({
  company: Joi.object({
    name: Joi.string().min(3).required(),
    cnpj: Joi.string().required(),
    description: Joi.string().required(),
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
});

export const SCHEMAUpdateCompany = Joi.object({
  name: Joi.string().min(3),
  cnpj: Joi.string(),
  description: Joi.string(),
});
