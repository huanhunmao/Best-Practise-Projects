const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 定义用户相关的路由
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

module.exports = router;
