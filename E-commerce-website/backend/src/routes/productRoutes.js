const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product
router.get('/getAllProducts', productController.getAllProducts);
router.post('/saveProducts', productController.saveProducts);
router.get('/:id/getProductById', productController.getProductById);

module.exports = router;
