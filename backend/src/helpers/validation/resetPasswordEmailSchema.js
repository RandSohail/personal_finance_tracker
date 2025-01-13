import Joi from "joi";
import { string } from './rules.js'

export default Joi.object({
  token: string
})