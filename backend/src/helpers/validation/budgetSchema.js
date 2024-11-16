import Joi from "joi";
import { id, number } from './rules.js'

export default Joi.object({
  categoryId: id,
  limit: number,
  current_spending: number
})