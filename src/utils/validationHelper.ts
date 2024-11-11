import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Invalid Email Address',
      'string.empty': 'Email is required',
    }),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('[a-z]'))
    .pattern(new RegExp('[A-Z]'))
    .pattern(new RegExp('[0-9]'))
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters',
      'string.empty': 'Password is required',
      'string.pattern.base': 'Password must contain uppercase and lowercase letters, and a number',
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Invalid Email Address',
      'string.empty': 'Email is required',
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Password is required',
    }),
});
