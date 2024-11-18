import Joi from 'joi';
import { optionalId, transactionType, number, optionString } from './rules.js'

export default Joi.object({
  type: transactionType,
  categoryId: optionalId,
  amount: number,
  description: optionString,
});