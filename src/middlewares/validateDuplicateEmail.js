const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.getUser(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' }); 
  }
  next();
};