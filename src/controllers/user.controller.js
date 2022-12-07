require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    await userService.createUser(req.body);
    const user = await userService.getUser(email);
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user } }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const getAll = async (_req, res) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getById(id);
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getAll,
  getById,
};
