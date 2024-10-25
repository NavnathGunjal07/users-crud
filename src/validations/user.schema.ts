import Joi from 'joi';

export const createUserSchema = Joi.object({    
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).optional(),
  email: Joi.string().email().optional(),
  age: Joi.number().integer().min(0).optional(),
});

export const signUpUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).optional(),
  email: Joi.string().email().optional(),
  age: Joi.number().integer().min(0).optional(),
  password: Joi.number().integer().min(0).optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().optional(),
  password: Joi.number().integer().min(0).optional(),
});

export const idSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
});
