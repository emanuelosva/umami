/**
 * @fileoverview Json Web TokenStrategy
*/

const passport = require('passport');
const { Strategy: jwtStrategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const userStore = require('../../components/user/store');
const config = require('../../../config');

passport.use(new jwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.jwtSecret,
  },
  async (payload, done) => {
    try {
      const [findedUser] = await userStore.filter({ email: payload.email });
      if (!findedUser._id) return done(boom.unauthorized(), null);

      delete findedUser.password;
      return done(null, findedUser);
    } catch (error) {
      done(error, null)
    }
  },
));