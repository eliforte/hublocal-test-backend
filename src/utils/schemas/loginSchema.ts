import Joi from 'joi';

export const SCHEMALogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const SCHEMAUpdateLogin = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(8),
});
