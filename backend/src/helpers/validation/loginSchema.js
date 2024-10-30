import Joi from "joi";
import { email, password } from './rules.js'

export default Joi.object({
  email,
  password
})