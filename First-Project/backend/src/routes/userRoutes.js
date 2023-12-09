const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const configListController = require('../controllers/configListController');
const orderController = require('../controllers/orderController');

// 定义用户相关的路由
router.get('/getUsers', userController.getAllUsers);
router.get('/:id/getUserById', userController.getUserById);
router.post('/create', userController.addNewUser);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);

// 定义Config 相关路由
router.get('/getConfigs', configListController.getAllConfig);
router.post('/createConfig', configListController.saveConfig);

// 定义 orders 相关路由
router.get('/getAllOrder', orderController.getAllOrder);
router.post('/saveOrder', orderController.saveOrder);

module.exports = router;
