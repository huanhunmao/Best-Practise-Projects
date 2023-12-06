const userModel = require('../models/userModel');

// 用户控制器的业务逻辑
const getAllUsers = (req, res) => {
  // 获取所有用户逻辑
  return res.json({
    name: 'Zhangsan',
    id:1
  })
};

const getUserById = (req, res) => {
  // 获取单个用户逻辑
};

const createUser = (req, res) => {
  // 创建用户逻辑
};

const updateUser = (req, res) => {
  // 更新用户逻辑
};

const deleteUser = (req, res) => {
  // 删除用户逻辑
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
