import express from 'express';
import AuthController from '../controllers/auth.js'
import { validator, signupSchema, loginSchema } from '../helpers/index.js';

const router = express.Router();

router.post('/auth/signup', validator.body(signupSchema), AuthController.signUp);
router.post('/auth/login', validator.body(loginSchema), AuthController.login);

export default router;