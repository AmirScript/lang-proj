import prisma from '../prismaClient';
import {Request, Response, NextFunction} from 'express';

export async function getWords (req: Request, res: Response, next: NextFunction) {
	const search=Array.isArray(req.query.search) ? req.query.search.join(' ') : (req.query.search ?? '') as string;
	const page=req.query.page ? parseInt(req.query.page as string) : 1;
	const pageSize=req.query.pageSize ? parseInt(req.query.pageSize as string) : 50;
	try{
		const words=await prisma.enword.findMany({
		    where: {
		        word: {
		            contains: search.toLowerCase()
		        }
		    },
		    skip: (page - 1) * pageSize,
		    take: pageSize as number
		});
		res.status(200).json({ words });
	}catch(err){ next(err); }
};

export async function getExp (req: Request, res: Response, next: NextFunction) {
	const word=Array.isArray(req.query.word) ? req.query.word[0] : (req.query.word ?? '') as string;
	try{
		const wordExp=await prisma.enword.findMany({
			where: { word },
		    select: { examples: true },
		});
		res.status(200).json({ wordExp });
	}catch(err){ next(err); }
};
