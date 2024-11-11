import prisma from '../prismaClient';
import {Request, Response, NextFunction} from 'express';

export async function getCharacters (req: Request, res: Response, next: NextFunction){
	const search=Array.isArray(req.query.search) ? req.query.search.join(' ') : (req.query.search ?? '') as string;
	const page=req.query.page ? parseInt(req.query.page as string) : 1;
	const pageSize=req.query.pageSize ? parseInt(req.query.pageSize as string) : 50;
	try{
		const characters=await prisma.hanzibiao.findMany({
		    where: {
		        hanzi: {
		            contains: search.toLowerCase()
		        }
		    },
		    skip: (page - 1) * pageSize,
		    take: pageSize as number,
		});
		res.status(200).json({ characters });
	}catch(err){ next(err); }
}

export async function getCharacter (req: Request, res: Response, next: NextFunction){
	try{
		const hanzi = Array.isArray(req.query.hanzi) ? req.query.hanzi[0] : (req.query.hanzi ?? '') as string;
		const level = req.query.level ? (Array.isArray(req.query.level) ? req.query.level[0] : req.query.level) : undefined;
		const levelFilter = level ? { lvl: parseInt(level as string, 10) } : {};
	    const words=await prisma.cihuibiao.findMany({
	      where: {
	        ch: { contains: hanzi as string },
	        ...levelFilter,
	      },
	    });

		res.status(200).json({ words });
	}catch(err){ next(err); }
};
