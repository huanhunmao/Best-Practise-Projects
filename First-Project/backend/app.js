const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 允许所有域名的跨域请求，实际生产环境中应该根据需要设置允许的域名
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
  

// 中间件和路由的配置
app.use(express.json());

// 引入路由
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
