import Joi from 'joi';

export const SCHEMATickets = Joi.object({
  ticket: Joi.object({
    status: Joi.string().required(),
    title: Joi.string().required(),
    upgradable_by_user: Joi.string().required(),
  }),
  place: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3),
    address: Joi.string(),
    phone_number: Joi.string(),
    address_number: Joi.number(),
    complement: Joi.string(),
    cep: Joi.string(),
  }),
});

export const SCHEMAUpdateTickets = Joi.object({
  status: Joi.string(),
  name: Joi.string().min(3),
  address: Joi.string(),
  address_number: Joi.number(),
  upgradable_by_user: Joi.string(),
  complement: Joi.string().allow(''),
  cep: Joi.string(),
});
