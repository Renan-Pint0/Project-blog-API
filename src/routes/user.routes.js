const express = require('express');
const userController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/validateNewUser');
const validateEmail = require('../middlewares/validateDuplicateEmail');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, validateEmail, userController.createUser);

module.exports = userRouter;