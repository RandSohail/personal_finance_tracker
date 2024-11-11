import Joi from "joi";
import { id, string } from './rules.js'

export default Joi.object({
  categoryId: id,
  limit: string,
  current_spending: string
})