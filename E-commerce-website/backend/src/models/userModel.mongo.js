const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
// 在保存用户之前对密码进行哈希
usersSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    next();
  });
  
  // 比较密码的方法
  usersSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

  const User = mongoose.model('User', usersSchema);

  module.exports = User;