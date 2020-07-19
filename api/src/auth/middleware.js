/**
 * @fileoverview Basic Auth middleware
*/

const passport = require('passport');
const boom = require('@hapi/boom');

// JWT Auth strategy
require('./strategys/jwt');

const basicAuth = (req, res, next) => {
  if (req.session && req.session.admin && req.session.user) {
    return next();
  }

  return res.redirect('/admin/login');
};

const jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', (error, user) => {
    if (error || !user) return next(boom.unauthorized());

    req.login(user, { session: false }, (error) => {
      if (error) return next(boom.unauthorized());

      next();
    });
  })(req, res, next);
};


module.exports = {
  basicAuth,
  jwtAuth
};
