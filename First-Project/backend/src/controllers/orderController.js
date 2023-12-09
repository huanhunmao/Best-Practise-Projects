const { 
    saveOrders,
    getOrders
   } = require('../models/orderModel')

const getAllOrder = async(req, res) => {
 const order = await getOrders()
 if(order){
   res.status(200).json(order)
 }else{
   res.status(404).json({error:'not found any order'})
 }
};

const saveOrder = async(req, res) => {
        const params = req.body;
  
        try {
          await saveOrders(params);
      
          // 发送成功响应
          res.status(201).json({ message: 'Order created successfully' });
        } catch (error) {
          // 发送错误响应
          console.error('Error creating order:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
}


module.exports = {
    getAllOrder,
    saveOrder
}