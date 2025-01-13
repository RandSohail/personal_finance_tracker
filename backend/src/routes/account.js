import express from 'express';
import AccountController from '../controllers/account.js'

const router = express.Router();

router.get('/balance', AccountController.Balance);

export default router;