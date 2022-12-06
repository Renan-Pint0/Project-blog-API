require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    await userService.createUser(req.body);
    const user = await userService.getUser(email);
    // if (user !== null) {
    //   return res.status(409).json({ message: 'User already registered' }); 
    // }
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user } }, secret, jwtConfig);
    if (user === email) {
      return res.status(409).json({ message: 'User already registered' }); 
    }

    res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  createUser,
};
