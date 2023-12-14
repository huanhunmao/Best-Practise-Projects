// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, } from 'antd';
import Register from './components/Register';
import Login from './components/Login';
import ProductList from './components/ProductList';

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ background: '#fff', padding: '0 16px' }}>
            <h1>My E-commerce Website</h1>
          </Header>
          <Content style={{ padding: '16px' }}>
                <Routes>
                  <Route path="/" element={<Register />} />
                </Routes>
                <Routes>
                  <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                  <Route path="/product-list" element={<ProductList />} />
                </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            My E-commerce Website ©2023 Created by You
          </Footer>
        </Layout>
      </Router>
    );
  };

export default App;
