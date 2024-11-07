import express from 'express';
import AccountController from '../controllers/account.js'
// import { validator } from '../helpers/index.js';

const router = express.Router();

router.get('/balance', AccountController.getBalance);

export default router;