import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { findUserByEmail } from "../model/user.model";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secrete key',
};

passport.use(
  new JwtStrategy(opts, (jwtPayload, done) => {
    const user = findUserByEmail(jwtPayload.email);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  })
);

export default passport;
