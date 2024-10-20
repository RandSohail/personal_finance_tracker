import express from 'express';
import authRouter from './auth.js';

const router = express.Router();


router.use('/api/v1', authRouter);

export default router;