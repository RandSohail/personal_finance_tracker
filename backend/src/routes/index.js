import express from 'express';
import authRouter from './auth.js';
import accountRouter from './account.js';
import userRouter from './user.js';
import budgerRouter from './budget.js';
import categoryRouter from './category.js';
import transactionRouter from './transaction.js';

const router = express.Router();


router.use('/api/v1/auth', authRouter);
router.use('/api/v1/account', accountRouter);
router.use('/api/v1/user', userRouter);
router.use('/api/v1/budget', budgerRouter);
router.use('/api/v1/category', categoryRouter);
router.use('/api/v1/transaction', transactionRouter);

export default router;