const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const configListController = require('../controllers/configListController');
const orderController = require('../controllers/orderController');
const itemController = require('../controllers/itemController');
const itemPluController = require('../controllers/itemPluController');
const buyOrderModelController = require('../controllers/buyOrderModelController');
const buyUserModelController = require('../controllers/buyUserModelController');

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

// 定义 items 相关路由
router.get('/getAllItems', itemController.getAllItems);
router.post('/saveItem', itemController.saveItem);

router.get('/getAllItemsMore', itemPluController.getAllItems);
router.post('/saveItemMore', itemPluController.saveItem);

router.get('/getBuyOrders', buyOrderModelController.getAllItems);
router.post('/saveOrders', buyOrderModelController.saveItem);
router.get('/getOrderAndUser', buyOrderModelController.getOrderAndUser);

router.get('/getBuyUsers', buyUserModelController.getAllItems);
router.post('/saveUsers', buyUserModelController.saveItem);

module.exports = router;
