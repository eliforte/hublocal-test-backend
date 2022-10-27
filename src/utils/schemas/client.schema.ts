import Joi from 'joi';

export const SCHEMAClient = Joi.object({
  company: Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
  places: Joi.array().items({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone_number: Joi.string().required(),
    address_number: Joi.number().required(),
    complement: Joi.string().required(),
    cep: Joi.string().required(),
  }),
  responsibles: Joi.array().items({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    address_number: Joi.number().required(),
    complement: Joi.string().required(),
    is_main_responsable: Joi.boolean().required(),
  }),
});
