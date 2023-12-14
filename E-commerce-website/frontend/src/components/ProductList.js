// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const { Meta } = Card;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 获取产品列表
    axios.get('http://localhost:3001/api/product/getAllProducts')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={<img alt={product.name} src="https://via.placeholder.com/300" />}
          >
            <Meta title={product.name} description={`Price: $${product.price}`} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
