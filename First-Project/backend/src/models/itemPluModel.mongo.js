const mongoose = require('mongoose');

const itemPlusSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],  // 这里应该是数组类型
        required: true
    },
    dim_cm: {
        type: [Number],  // 这里应该是数组类型
        required: true
    }
});

// Define the 'Item' model
module.exports = mongoose.model('itemPlu', itemPlusSchema);
