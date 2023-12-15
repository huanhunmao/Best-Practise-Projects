const express = require('express');
const passport = require('passport');
const router = require('./routes')
const passportConfig = require('./passport-config')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3002;

// 使用 Passport 中间件
app.use(passport.initialize());

// 使用 Passport 配置
passportConfig(passport);


// ... 其他应用程序配置和路由 ...
app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
