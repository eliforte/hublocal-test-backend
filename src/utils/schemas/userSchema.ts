import Joi from 'joi';

export const SCHEMAUser = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  is_admin: Joi.boolean(),
});

export const SCHEMAUpdateUser = Joi.object({
  email: Joi.string().email(),
  name: Joi.string().min(3),
  password: Joi.string().min(8),
  is_admin: Joi.boolean(),
});
