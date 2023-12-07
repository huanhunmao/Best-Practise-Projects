const usersDatabase = require('./userModel.mongo')
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

async function deleteUserById(id) {
    try {
        const result = await usersDatabase.findByIdAndDelete(id);
        console.log('删除成功:', result);
    } catch (err) {
        console.error('删除失败:', err);
    }
}

async function updateUserById(id,value){
    return await usersDatabase.findOneAndUpdate({ id }, // 查询条件，通过id查找用户
    { $set: value }, // 更新的数据，使用$set操作符
    { new: true } // 返回更新后的文档而不是原始文档)
)}

  module.exports = {
    existsUserWithId,
    saveUsers,
    getUsers,
    deleteUserById,
    updateUserById
  };