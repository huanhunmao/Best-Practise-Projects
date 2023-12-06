const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 定义用户相关的路由
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addNewUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
