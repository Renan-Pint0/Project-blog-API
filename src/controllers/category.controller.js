const categoryService = require('../services/category.service');

const newCategory = async (req, res) => {
  const result = await categoryService.newCategory(req.body);
  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const result = await categoryService.getAll();
  return res.status(200).json(result);
};

module.exports = {
  newCategory,
  getAll,
};