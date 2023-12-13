const express = require('express');
const router = express.Router();
const orderChooseModelController = require('../controllers/orderChooseModelController');

// 定义Order相关的路由
router.get('/getOrderItem', orderChooseModelController.getOrderItem);
router.post('/saveOrderItem', orderChooseModelController.saveOrderItem);

module.exports = router;
