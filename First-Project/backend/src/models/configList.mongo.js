const mongoose = require('mongoose')

const configSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Config', configSchema)