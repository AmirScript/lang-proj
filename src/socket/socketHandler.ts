import {registerSchema, loginSchema} from '../utils/validationHelper';
import {registerUser, loginUser} from '../controllers/authController';
import prisma from '../prismaClient';
import {Server, Socket} from 'socket.io';
import {body} from 'express-validator';

interface JwtPayload {
  id: number;
}

export function initializeSocket(io: Server){
	io.on('connection', (socket: Socket)=> {
		console.log('A user connected:', socket.id);

		socket.on('register', async (data)=> {
			const {error}=registerSchema.validate(data);
      if(error){
      	socket.emit('registerError', { error: error.details[0].message });
        return;
      }
			try{
				const result=await registerUser(data.email, data.password);
				socket.emit('registerSuccess', { user: result.user, token: result.token });
			}catch(err){
				if(err instanceof Error){
					socket.emit('registerError', { error: err.message });
				}else{
					socket.emit('registerError', { error: 'An unknown error occured!' });
				}
			}
		});

		socket.on('login', async (data)=> {
			const {error}=loginSchema.validate(data);
      if(error){
        socket.emit('loginError', { error: error.details[0].message });
        return;
      }
			try{
				const result=await loginUser(data.email, data.password);
				socket.emit('loginSuccess', { user: result.user, token: result.token });
			}catch(err){
				if(err instanceof Error){
					socket.emit('loginError', { error: err.message });
				}else{
					socket.emit('loginError', { error: 'An unknown error occured!' });
				}
			}
		});

		
	  socket.on("vocabUpdate", async (data) => {
	    const hanzi = Array.isArray(data.hanzi) ? data.hanzi[0] : data.hanzi ?? '';
	    const level = data.level ? (Array.isArray(data.level) ? data.level[0] : data.level) : undefined;
	    const levelFilter = level ? { lvl: parseInt(level, 10) } : {};
	    try {
	      const characterDetails = await prisma.cihuibiao.findMany({
	        where: {
	          ch: { contains: hanzi },
	          ...levelFilter,
	        },
	      });
	      // Emit response specifically to the requesting client
	      socket.emit("vocabUpdateResponse", {
	        words: characterDetails,
	      });
	    } catch (error) {
	      console.error("Failed to fetch character details:", error);
	      socket.emit("vocabUpdateResponse", { error: "Failed to fetch data" });
	    }
	  });


	});
}
