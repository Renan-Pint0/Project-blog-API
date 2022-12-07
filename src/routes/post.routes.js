const express = require('express');
const postController = require('../controllers/post.controller');
const validateJwt = require('../middlewares/validateJWT');

const postRouter = express.Router();

postRouter.get('/', validateJwt, postController.getAllPost);

module.exports = postRouter;