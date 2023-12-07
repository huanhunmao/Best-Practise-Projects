const axios = require('axios');
const usersDatabase = require('./userModel.mongo')

  const user = {
    id: 100, 
    name: 'Zhangsan', 
    email: '888@qq.com',
    tags:['best person']
}

  async function saveUsers(user) {
    await usersDatabase.findOneAndUpdate({
        id: user.id,
    }, user, {
        upsert: true,
    })
}

async function existsUserWithId(id) {
    return await usersDatabase.findOne({
        id
    })
}

async function getUsers(){
    return await usersDatabase.find({})
}

saveUsers(user)

  module.exports = {
    existsUserWithId,
    saveUsers,
    getUsers
  };