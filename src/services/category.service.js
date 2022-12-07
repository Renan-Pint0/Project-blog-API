const { Category } = require('../models');

const newCategory = async (categoryName) => {
  const result = await Category.create(categoryName);
  return result;
};

module.exports = {
  newCategory,
};