const mongoose = require('mongoose');

const buyOrderModel = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: function () {
        return new mongoose.Types.ObjectId(); // MongoDB 自动生成的唯一标识符
      }
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // 类型是 ObjectId
      ref: 'buyUser' // 关联 buyUser 集合
    },
    products: [String],
    total_amount: Number
});




module.exports = mongoose.model('buyOrder', buyOrderModel);
