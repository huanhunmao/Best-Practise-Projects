const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 中间件和路由的配置
app.use(express.json());

// 引入路由
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
