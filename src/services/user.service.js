const { User } = require('../models');

const createUser = async (user) => {
  const login = await User.create(user);
  
  return login;
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  getUser,
};