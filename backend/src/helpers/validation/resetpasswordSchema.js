import Joi from "joi";
import { password } from './rules.js'

export default Joi.object({
  password
})