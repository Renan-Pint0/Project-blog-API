const { Category } = require('../models');

const newCategory = async (categoryName) => {
  const result = await Category.create(categoryName);
  return result;
};

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  newCategory,
  getAll,
};