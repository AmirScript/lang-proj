import {register, login, updateProfile} from '../controllers/authController';
import passport from 'passport';
import {body} from 'express-validator';
import {Router, Request, Response} from 'express';

const router=Router();

router.post('/register', [
	body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid Email Address'),
	body('password').notEmpty().withMessage('Password is required').isLength({min:8}).withMessage('Password must be at least 8 characters').matches(/[a-z]/).withMessage('Password must contain a lowercase letter').matches(/[A-Z]/).withMessage('Password must contain an uppercase letter').matches(/\d/).withMessage('Password must contain a number')
	/*.matches(/[!@#$%&*?]/).withMessage('Password must contain a special character')*/
], register);

router.post('/login', [
	body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid Email Address'),
	body('password').notEmpty().withMessage('Password is required')
], login);

router.put('/profile', [
  body('email').optional().trim().isEmail().withMessage('Invalid Email Address'),
  body('password').optional().isLength({min: 8}).withMessage('Password must be at least 8 characters').matches(/[a-z]/).withMessage('Password must contain a lowercase letter').matches(/[A-Z]/).withMessage('Password must contain an uppercase letter').matches(/\d/).withMessage('Password must contain a number'),
], passport.authenticate('jwt', {session: false}), updateProfile);

export default router;
