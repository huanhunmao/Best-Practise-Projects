const userModel = require('../models/userModel');
const {existsUserWithId} = require('../models/userModel')

// 用户控制器的业务逻辑
const getAllUsers = (req, res) => {
  // 获取所有用户逻辑
};

const getUserById = async (req, res) => {
  // 获取单个用户逻辑
  const userId = parseInt(req.params.id)

  // 模拟数据库查询
  const user = await existsUserWithId(userId)

  if(user){
    res.status(200).json(user)
  }else{
    res.status(404).json({error:'NotFound'})
  }
};

const addNewUser = async (req, res) => {
    // 创建用户逻辑
    const params = req.body;
  
    try {
      // 使用 try-catch 捕获可能的错误
      await userModel.saveUsers(params);
  
      // 发送成功响应
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // 发送错误响应
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
  addNewUser,
  updateUser,
  deleteUser,
};
