const mongoose = require('mongoose')

const ordersChooseSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    imageSrc: { type: String, required: true },
    name: { type: String,  required: true },
    hotRank:{type:Number, required: true},
    ingredients: { type: String, required: true },
    monthlySales:{type:Number, required: true},
    price:{type:Number, required: true},
})

module.exports = mongoose.model('ordersChoose', ordersChooseSchema)