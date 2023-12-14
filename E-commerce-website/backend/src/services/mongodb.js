const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.once('error', (error) => {
    console.error(error)
})

async function mongoConnect() {
   await mongoose.connect(MONGO_URL, {
    })
}

module.exports = {
    mongoConnect
}