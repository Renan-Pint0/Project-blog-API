const postService = require('../services/post.service');

const getAllPost = async (_req, res) => {
  const post = await postService.getAllPost();
  return res.status(200).json(post);
};

module.exports = {
  getAllPost,
};