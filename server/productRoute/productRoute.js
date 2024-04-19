
const express = require('express')
const { FindProduct, createProduct } = require('../controller/productController');
const upload = require('../multer/multer');

const routs = express.Router()

routs.get('/product', FindProduct);
routs.post('/product', upload.single("product"), createProduct)

module.exports = routs