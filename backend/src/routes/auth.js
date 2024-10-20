import express from 'express';
import AuthController from '../controllers/auth.js'
import { validator, signupSchema } from '../helpers/index.js';

const router = express.Router();

router.post('/auth/signup', validator.body(signupSchema), AuthController.signUp);

export default router;