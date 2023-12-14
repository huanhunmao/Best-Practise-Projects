const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // 其他产品信息字段可以根据需要添加
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;