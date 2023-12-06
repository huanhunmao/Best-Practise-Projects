const userModel = require('../models/userModel');

// 模拟数据库中的用户数据 
const users = [
    new userModel(101, 'User1', 'user1@example.com'),
    new userModel(201, 'User2', 'user2@example.com'),
    new userModel(301, 'User3', 'user3@example.com'),
    new userModel(401, 'User4', 'user4@example.com'),
    new userModel(501, 'User5', 'user5@example.com'),
    new userModel(601, 'User6', 'user6@example.com'),
    // 添加更多用户...
  ];

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
  const userId = parseInt(req.params.id)

  // 模拟数据库查询
  const user = users.find(user => user.id === userId)

  if(user){
    res.status(200).json(user)
  }else{
    res.status(404).json({error:'NotFound'})
  }
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
