// src/components/Register.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Register = () => {
  const [form] = Form.useForm();

  const handleRegister = values => {
    axios.post('http://localhost:3001/api/user/register', values)
      .then(response => {
        message.success('Registration successful!');
        form.resetFields();
      })
      .catch(error => {
        message.error('Registration failed. Please try again.');
        console.error('Error registering user:', error);
      });
  };

  return (
    <Form form={form} onFinish={handleRegister} layout="vertical">
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
