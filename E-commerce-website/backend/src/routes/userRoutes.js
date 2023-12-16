const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

// 定义用户相关的路由
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

// Product
router.post('/login', productController.getAllProducts);

module.exports = router;
