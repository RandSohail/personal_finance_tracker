import Joi from "joi";

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,10}$/;

export const name = Joi.string()
  .required().messages({ 'string.empty': 'name cannot be empty', 'any.required': 'name is required' });


export const email = Joi.string().min(5).max(255).email()
  .regex(RegExp(EMAIL_REGEX))
  .rule({ message: 'You must enter a valid Email' })
  .required();

export const password = Joi.string().$.min(6).max(33)
  .rule({ message: 'Password length must be between 6 and 33 characters' })
  .required();

export const id = Joi.number()
  .required().messages({ 'number.empty': 'id cannot be empty' });

export const optionalId = Joi.number().allow("");

export const string = Joi.string()
  .required().messages({ 'string.empty': 'cannot be empty' });

export const optionString = Joi.string().allow("");

export const transactionType = Joi.string().valid("income", "expense").required().messages({ 'string.empty': 'cannot be empty' });

export const number = Joi.number().required().messages({ 'number.empty': 'id cannot be empty' });