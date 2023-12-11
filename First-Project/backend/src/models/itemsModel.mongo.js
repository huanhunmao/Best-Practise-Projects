const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  size: {
    h: {
      type: Number,
      required: true,
    },
    w: {
      type: Number,
      required: true,
    },
    uom: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Item', itemsSchema);
