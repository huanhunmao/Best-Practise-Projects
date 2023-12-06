const axios = require('axios');
const usersDatabase = require('./userModel.mongo')


// 用户数据模型
class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  const user = {
    id: 100, 
    name: 'Zhangsan', 
    email: '888@qq.com'
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

saveUsers(user)

  module.exports = {
    existsUserWithId,
    saveUsers
  };