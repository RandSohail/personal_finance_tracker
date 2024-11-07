import express from 'express';
import authRouter from './auth.js';
import accountRouter from './account.js';
import userRouter from './user.js';

const router = express.Router();


router.use('/api/v1/auth', authRouter);
router.use('/api/v1/account', accountRouter);
router.use('/api/v1/user', userRouter);

export default router;