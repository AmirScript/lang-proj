import {Request, Response, NextFunction} from 'express';

interface ErrorWithStatus extends Error {
	status?: number;
}

const errorHandler=(err: ErrorWithStatus, req: Request, res: Response, next: NextFunction)=> {
	res.status(err.status || 500).json({
		message: err.message || "Internal Server Error",
		error: process.env.NODE_ENV === "development" ? err.stack : {}
	});
};

export default errorHandler;
