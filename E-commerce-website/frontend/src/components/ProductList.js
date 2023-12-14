// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Input, Button } from 'antd';
import axios from 'axios';

const { Meta } = Card;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // 获取产品列表
    axios.get('http://localhost:3001/api/product/getAllProducts')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = () => {
    axios.get(`http://localhost:3001/api/product/${searchKeyword}/getProductById`)
    .then(response => setSearchResults([ response.data]))
    .catch(error => console.error('Error fetching products:', error));
  }

  console.log('searchResults',searchResults);

  if(searchResults[0] === ''){
    return <div>未查到结果！</div>
  }

  return (
    <>
    <Input
  value={searchKeyword}
  onChange={(e) => setSearchKeyword(e.target.value)}
/>
<Button type='primary' onClick={handleSearch}>Search</Button>

        <Row gutter={[16, 16]}>
      {searchResults.length > 0  ? (searchResults.map(product => (
        <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={<img alt={product.name} src="https://via.placeholder.com/300" />}
          >
            <Meta title={product.name} description={`Price: $${product.price}`} />
          </Card>
        </Col>
      ))): (products.map(product => (
        <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={<img alt={product.name} src="https://via.placeholder.com/300" />}
          >
            <Meta title={product.name} description={`Price: $${product.price}`} />
          </Card>
        </Col>
      )))
      }
    </Row>
    </>
  );
};

export default ProductList;
