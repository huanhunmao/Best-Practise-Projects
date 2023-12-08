const { 
    getAllConfigs,
    saveConfigs
   } = require('../models/configModel')

const getAllConfig = async(req, res) => {
 const config = await getAllConfigs()
 if(config){
   res.status(200).json(config)
 }else{
   res.status(404).json({error:'not found any config'})
 }
};

const saveConfig = async(req, res) => {
        const params = req.body;
  
        try {
          await saveConfigs(params);
      
          // 发送成功响应
          res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
          // 发送错误响应
          console.error('Error creating user:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
}


module.exports = {
    getAllConfig,
    saveConfig
}