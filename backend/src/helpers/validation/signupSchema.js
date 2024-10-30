import Joi from 'joi';
import { name, email, password } from './rules.js'

export default Joi.object({
  name,
  email,
  password,
});