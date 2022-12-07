const { User } = require('../models');

const createUser = async (user) => {
  const login = await User.create(user);
  
  return login;
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return result;
};

module.exports = {
  createUser,
  getUser,
  getAll,
};