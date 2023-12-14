// src/App.js
import React from 'react';
import { Layout, Tabs } from 'antd';
import Register from './components/Register';
import Login from './components/Login';
import ProductList from './components/ProductList';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 16px' }}>
        <h1>My E-commerce Website</h1>
      </Header>
      <Content style={{ padding: '16px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Register" key="1">
            <Register />
          </TabPane>
          <TabPane tab="Login" key="2">
            <Login />
          </TabPane>
        </Tabs>
        <ProductList />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My E-commerce Website ©2023 Created by You
      </Footer>
    </Layout>
  );
};

export default App;
