import {config} from 'dotenv'; config();
import authRoutes from './routes/authRoutes';
import chRoutes from './routes/chRoutes';
import enRoutes from './routes/enRoutes';
import passport from './config/passport';
import errorHandler from './middleware/errorHandler';
import {initializeSocket} from './socket/socketHandler';
import morgan from 'morgan';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import path from 'path';
import {createServer} from 'http';
import {Server} from 'socket.io';
import express, {Request, Response, NextFunction} from 'express';

const PORT=process.env.PORT ?? 1234;
const app=express();
const server=createServer(app);
const io=new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});
initializeSocket(io);

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(morgan('dev')); /* combined / common / dev / tiny */
app.use(helmet({ hidePoweredBy: true }));
app.use(hpp());
app.use(cors());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/ch', chRoutes);
app.use('/api/en', enRoutes);

app.get('*', (req: Request, res: Response)=> {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req: Request, res: Response, next: NextFunction)=> {
	res.status(404).json({ msg: 'Page Not Found!' });
});
app.use(errorHandler);

server.listen(PORT, ()=> console.log(`\t Running on http://127.0.0.1:${PORT} ;)`));
