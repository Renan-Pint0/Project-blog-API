const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const login = await User.create({ displayName, email, password, image });
  
  return login;
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  return user;
};

module.exports = {
  createUser,
  getUser,
};