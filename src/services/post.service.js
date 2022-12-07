const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const post = await BlogPost.findAll({
    include: [{
      model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category, as: 'categories', through: { attributes: [] },
    }],
  });
  return post;
};

module.exports = {
  getAllPost,
};