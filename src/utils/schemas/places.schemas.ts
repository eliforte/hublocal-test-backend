import Joi from 'joi';

export const SCHEMAPlaces = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  address_number: Joi.number().required(),
  complement: Joi.string().required(),
  cep: Joi.string().required(),
});
