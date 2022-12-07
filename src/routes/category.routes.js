const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateJwt = require('../middlewares/validateJWT');
const validateName = require('../middlewares/validateName');

const categoryRouter = express.Router();

categoryRouter.post('/', validateName, validateJwt, categoryController.newCategory);
categoryRouter.get('/', validateJwt, categoryController.getAll);

module.exports = categoryRouter;