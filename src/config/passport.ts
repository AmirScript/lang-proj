import prisma from '../prismaClient';
import passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string
}, async (jwt_payload, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: jwt_payload.id } });
    if (user) {
      return done(null, user); /* Attach the full user to req.user */
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

export default passport;
