const jwt = require('jsonwebtoken');
const User = require('../models/userModel.mongo')

const loginUser = async(req, res) => {
 try{
    const {email, password} = req.body
        // 查找用户
        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // 验证密码
        const isValidPassword =  await user.comparePassword(password)

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }

          // 生成token并返回给客户端
          const token = jwt.sign({userId: user.id},'your-secret-key')
          res.json({token})
 }catch(error){
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
};

const registerUser = async(req, res) => {

    try{
        const {username,email, password} = req.body
     // 检查用户名和邮箱是否已存在
     const existingUser = await User.findOne({$or:[{username, email}]})

     if (existingUser) {
         return res.status(400).json({ error: 'Username or email already exists' });
       }

      // 创建新用户
      const newUser = new User({ username, email, password });
      await newUser.save();
  
      // 生成token并返回给客户端
      const token = jwt.sign({ userId: newUser._id }, 'your-secret-key');
      res.json({ token });
    }catch(error){
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports = {
    loginUser,
    registerUser,
};
