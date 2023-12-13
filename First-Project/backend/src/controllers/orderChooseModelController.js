const { 
    saveOrderItems,
    getOrderItems,
    existsOrderWithIds
   } = require('../models/orderChooseModel')

const getOrderItem = async(req, res) => {
 const order = await getOrderItems()
 if(order){
   res.status(200).json(order)
 }else{
   res.status(404).json({error:'not found any item'})
 }
};

const saveOrderItem = async(req, res) => {
        const params = req.body;
  
        try {
          await saveOrderItems(params);
      
          // 发送成功响应
          res.status(201).json({ message: 'item created successfully' });
        } catch (error) {
          // 发送错误响应
          console.error('Error creating item:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
}

const getOrderById = async (req, res) => {
    const orderId = parseInt(req.params.id)
    console.log('orderId',orderId);
  
    const user = await existsOrderWithIds(orderId)
  
    if(user){
      res.status(200).json(user)
    }else{
      res.status(404).json([])
    }
  };

module.exports = {
    getOrderItem,
    saveOrderItem,
    getOrderById
}