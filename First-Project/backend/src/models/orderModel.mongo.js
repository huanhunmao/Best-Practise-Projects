const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    riderName: { type: Object, required: true },
    itemName: { type: Object, required: true },
    isAnonymous: { type: Boolean, default: false },
    evaluate:{type:Number, required: true},
    ratings: { type: Number, min: 1, max: 5, required: true },
})

module.exports = mongoose.model('Order', ordersSchema)