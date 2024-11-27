import express from 'express';
import TransactionController from "../controllers/transaction.js";
import { validator, transactionSchema } from "../helpers/index.js";

const router = express.Router();

router.post('/add-transaction', validator.body(transactionSchema), TransactionController.addTransaction)
router.get('/all-transactions', TransactionController.allTransactions)

export default router;