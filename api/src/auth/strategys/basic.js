/**
 * @fileoverview Basic Authentication strategy
*/

const store = require('../../components/admin/store');
const bycrypt = require('bcrypt');

module.exports = async (body, req) => {
  const { user, password } = body;

  try {
    const [admin] = await store.adminStore.filter({ user });

    if (admin) {
      const hashedPassword = admin.password;
      const correctPassword = await bycrypt.compare(password, hashedPassword);

      if (correctPassword) {
        req.session.admin = true;
        req.session.user = admin.user;
        return true
      }
      return false;
    }

    return false;
  } catch (error) {
    console.error(`[basicStartegy] -> ${error}`)
    return false
  }
};
