import Joi from 'joi';

export const SCHEMATickets = Joi.object({
  status: Joi.string().required(),
  name: Joi.string().min(3).required(),
  address: Joi.string().required(),
  address_number: Joi.number().required(),
  upgradable_by_user: Joi.string().required(),
  complement: Joi.string(),
  cep: Joi.string().required(),
});

export const SCHEMAUpdateTickets = Joi.object({
  status: Joi.string(),
  name: Joi.string().min(3),
  address: Joi.string(),
  address_number: Joi.number(),
  upgradable_by_user: Joi.string(),
  complement: Joi.string(),
  cep: Joi.string(),
});
