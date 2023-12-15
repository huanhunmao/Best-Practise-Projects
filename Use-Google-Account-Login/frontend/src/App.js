import { Button } from 'antd';
import axios from 'axios';
import './App.css';

function App() {
    const handleGoogleLogin = () => {
        // 跳转到后端的 Google 登录路由
        window.location.href = 'http://localhost:3002/auth/google/callback';
      };

  return (
    <div className="App">
       <Button type='primary' onClick={handleGoogleLogin}>使用 Google 账号登录</Button>
    </div>
  );
}

export default App;
