// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = values => {
    axios.post('http://localhost:3001/api/user/login', values)
      .then(response => {
        message.success('Login successful!');
        form.resetFields();
        
        navigate('/product-list');
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
