/**
 * @fileoverview Basic Auth middleware
*/

const basicAuth = (req, res, next) => {
  if (req.session && req.session.admin && req.session.user) {
    return next();
  }

  return res.redirect('/admin/login');
};

module.exports = basicAuth;
