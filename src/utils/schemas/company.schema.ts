import Joi from 'joi';

export const SCHEMACompany = Joi.object({
  name: Joi.string().required(),
  cnpj: Joi.string().required(),
  description: Joi.string().required(),
});
