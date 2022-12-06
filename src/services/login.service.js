const { User } = require('../models');

const userLogin = async (email, password) => {
  const login = await User.create({ email, password });
  
  return login;
};
const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  userLogin,
  getUser,
};