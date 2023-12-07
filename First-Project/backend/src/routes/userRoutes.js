const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 定义用户相关的路由
router.get('/getUsers', userController.getAllUsers);
router.get('/:id/getUserById', userController.getUserById);
router.post('/create', userController.addNewUser);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);

module.exports = router;
