const express = require('express');
const userController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/validateNewUser');
const validateEmail = require('../middlewares/validateDuplicateEmail');
const validateJwt = require('../middlewares/validateJWT');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, validateEmail, userController.createUser);
userRouter.get('/', validateJwt, userController.getAll);
userRouter.get('/:id', validateJwt, userController.getById);

module.exports = userRouter;