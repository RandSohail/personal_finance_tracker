import Joi from 'joi';

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,10}$/;

export default Joi.object({
  name: Joi.string()
    .required().messages({ 'string.empty': 'name cannot be empty', 'any.required': 'name is required' }),
  email: Joi.string().min(5).max(255).email()
    .regex(RegExp(EMAIL_REGEX))
    .rule({ message: 'You must enter a valid Email' })
    .required(),
  password: Joi.string().$.min(6).max(33)
    .rule({ message: 'Password length must be between 6 and 33 characters' })
    .required(),
});