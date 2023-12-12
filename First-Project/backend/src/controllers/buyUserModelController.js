const { 
    saveConfigs,
    getAllConfigs
   } = require('../models/buyUserModel')

const getAllItems = async(req, res) => {
 const order = await getAllConfigs()
 if(order){
   res.status(200).json(order)
 }else{
   res.status(404).json({error:'not found any item'})
 }
};

const saveItem = async(req, res) => {
        const params = req.body;
  
        try {
          await saveConfigs(params);
      
          // 发送成功响应
          res.status(201).json({ message: 'item created successfully' });
        } catch (error) {
          // 发送错误响应
          console.error('Error creating item:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
}


module.exports = {
    getAllItems,
    saveItem
}