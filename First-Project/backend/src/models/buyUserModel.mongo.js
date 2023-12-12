const mongoose = require('mongoose');

const buyUserModel = new mongoose.Schema({
    name: String,
    email: String
  });
  

module.exports = mongoose.model('buyUser', buyUserModel);
