const express = require('express');
const router = express.Router();

// Import controller
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller');

// Import middleware
const { authBearer } = require('../middleware/auth.middleware');

// Public endpoints (tidak perlu token)
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected endpoints (wajib token)
router.post('/', authBearer, createProduct);
router.put('/:id', authBearer, updateProduct);
router.delete('/:id', authBearer, deleteProduct);

module.exports = router;
