// src/components/Login.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Login = () => {
  const [form] = Form.useForm();

  const handleLogin = values => {
    axios.post('/api/login', values)
      .then(response => {
        message.success('Login successful!');
        form.resetFields();
        // 在此处处理登录成功后的操作，例如重定向到用户的个人页面
      })
      .catch(error => {
        message.error('Login failed. Please check your credentials.');
        console.error('Error logging in:', error);
      });
  };

  return (
    <Form form={form} onFinish={handleLogin} layout="vertical">
      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Login</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
