const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tags:{
        type: Array,
    }
})

module.exports = mongoose.model('User', usersSchema)