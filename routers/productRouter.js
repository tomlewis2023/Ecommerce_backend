const express = require('express')
const ProductRouter = express.Router()
const {getlogin,getSignup,getProducts} = require('../controllers/productController')



ProductRouter.get('/products', getProducts)
ProductRouter.post('/login', getlogin)
ProductRouter.post('/signup', getSignup)

module.exports = ProductRouter