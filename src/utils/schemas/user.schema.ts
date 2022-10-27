import Joi from 'joi';

export const SCHEMAUser = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  is_admin: Joi.boolean().required(),
});
