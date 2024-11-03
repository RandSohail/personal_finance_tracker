import Joi from "joi";
import { email } from './rules.js'

export default Joi.object({
  email
})