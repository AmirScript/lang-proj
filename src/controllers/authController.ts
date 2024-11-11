import prisma from '../prismaClient';
import {UserPayload} from '../types/types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {validationResult} from 'express-validator';
import {Request, Response, NextFunction} from 'express';

interface JwtPayload {
	id: number;
}

export async function updateProfile(req: Request, res: Response, next: NextFunction){
	const errors=validationResult(req);
	if( !errors.isEmpty() ){
		res.status(400).json({ error: errors.array() }); return;
	}
	const {email, password}=req.body;
	try{
		const updateData: { email?: string, password?: string }={};
		if(email) updateData.email=email;
		if(password) updateData.password=await bcrypt.hash(password, 11);
		if(Object.keys(updateData).length === 0){
			res.status(400).json({ error: 'No fields to update!' }); return;
		}
		if(!req.user || !req.user.id){ /* Type Guard before trying to access ID in prisma */
			res.status(403).json({ error: 'Unauthorized access!' }); return;
		}
		const user = await prisma.user.update({
		  where: { id: req.user.id },
		  data: updateData,
		});
		const { password: _, ...safeUser }=user;
		res.status(200).json({ message: 'Profile updated successfully!', user: safeUser });
	}catch(err){
		if(err instanceof Error){
			res.status(400).json({ error: err.message });
		}else{ next(err); }
	}
}

export async function registerUser(email: string, password: string){
	let user=await prisma.user.findUnique({ where: { email } });
	if(user) throw new Error('User already exists');
	user=await prisma.user.create({
		data: { email, password: await bcrypt.hash(password, 11) }
	});
	const token=jwt.sign(
		{ id: user.id } as JwtPayload,
		process.env.JWT_SECRET as string,
		{ expiresIn: '1h' }
	);
	return { user, token };
}

export async function loginUser(email: string, password: string){
	const user=await prisma.user.findUnique({ where: { email } });
	const passMatch=user && await bcrypt.compare(password, user.password);
	if( !user || !passMatch ) throw new Error('Invalid Credentials');
	const token=jwt.sign(
		{ id: user.id } as JwtPayload,
		process.env.JWT_SECRET as string,
		{ expiresIn: '1h' }
	);
	return { user, token };
}

export async function register(req: Request, res: Response, next: NextFunction){
	const errors=validationResult(req);
	if( !errors.isEmpty() ){
		res.status(400).json({ error: errors.array() }); return;
	}
	const {email, password}=req.body;
	try{
		const result=await registerUser(email, password);
		res.status(201).json(result);
	}catch(err){
		if(err instanceof Error){
			res.status(400).json({ error: err.message });
		}else{ next(err); }
	}
}

export async function login(req: Request, res: Response, next: NextFunction){
	const errors=validationResult(req);
	if( !errors.isEmpty() ){
		res.status(400).json({ error: errors.array() }); return;
	}
	const {email, password}=req.body;
	try{
		const result=await loginUser(email, password);
		res.status(200).json(result);
	}catch(err){
		if(err instanceof Error){
			res.status(400).json({ error: err.message });
		}else{ next(err); }
	}
}
