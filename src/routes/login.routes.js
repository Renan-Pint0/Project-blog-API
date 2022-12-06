const express = require('express');
const userController = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', userController.login);

module.exports = loginRouter;