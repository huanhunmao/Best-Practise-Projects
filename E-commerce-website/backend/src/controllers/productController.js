const  Product = require('../models/productModel.mongo')

const productsData = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 39.99,
    },
    {
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 49.99,
    },
    {
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 59.99,
    },
    {
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 69.99,
    },
    {
      name: 'Product 7',
      description: 'Description for Product 7',
      price: 79.99,
    },
    {
      name: 'Product 8',
      description: 'Description for Product 8',
      price: 89.99,
    },
    {
      name: 'Product 9',
      description: 'Description for Product 9',
      price: 99.99,
    },
    {
      name: 'Product 10',
      description: 'Description for Product 10',
      price: 109.99,
    },
  ];
  

async function getAllProducts(req, res){
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        console.error('Error getting products in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
      }
}

async function saveProducts(req, res){

    try {
        // 使用insertMany方法将数据保存到数据库
        const savedProducts = await Product.insertMany(productsData);
    
        console.log('Products saved to database:', savedProducts);
      } catch (error) {
        console.error('Error saving products to database:', error);
      }
}

saveProducts()

async function getProductById(req, res){

    const name = req.params.name
    try {
        const products = await Product.findOne({name});
        res.json(products);
      } catch (error) {
        console.error('Error getting products in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {
    getAllProducts,
    saveProducts,
    getProductById
}