const mongoose = require('mongoose');
const buyUserDatabase = require('./buyUserModel.mongo')

const user = [
    {
      "name": "John",
      "email": "john@example.com"
    },
  ]

  async function saveConfigs(items) {
    for (const item of items) {
       return await buyUserDatabase.findOneAndUpdate(
            { _id: item._id },
            item,
            { upsert: true }
        );
    }
}

saveConfigs(user)

async function getAllConfigs(){
    return await buyUserDatabase.find({})
}
module.exports = {
    saveConfigs,
    getAllConfigs
}