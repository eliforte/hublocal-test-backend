import Joi from 'joi';

export const SCHEMAResponsables = Joi.object({
  full_name: Joi.string().required(),
  address: Joi.string().required(),
  address_number: Joi.number().required(),
  complement: Joi.string().required(),
  is_main_responsable: Joi.boolean().required(),
});
