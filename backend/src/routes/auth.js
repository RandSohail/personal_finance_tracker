import express from 'express';
import AuthController from '../controllers/auth.js'
import {
  validator, signupSchema, loginSchema, forgetPasswordSchema, resetPasswordEmailSchema,
  resetPasswordSchema
} from '../helpers/index.js';

const router = express.Router();

router.post('/signup', validator.body(signupSchema), AuthController.signUp);
router.post('/login', validator.body(loginSchema), AuthController.login);
router.post('/forget-password', validator.body(forgetPasswordSchema), AuthController.forgetPassword);
router.get('/reset-password/:token', validator.params(resetPasswordEmailSchema), AuthController.resetPasswordEmail);
router.post('/reset-password', validator.body(resetPasswordSchema), AuthController.resetPassword);
router.post('/logout', AuthController.logout);

export default router;