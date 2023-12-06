const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://markfu1996:B9GJ5oFC3mgZcj0a@cluster0.enrkxwr.mongodb.net/?retryWrites=true&w=majority'

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