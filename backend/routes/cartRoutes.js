const express =require('express')
const {addToCart, getCart}=require('../controllers/cart.js')

const router = express.Router()
// const {all_product, one_product} = require('../controllers/product.js')

router.route('/').get((req, res)=>getCart(req, res))
router.route('/add').post((req, res)=>addToCart(req, res))
module.exports = router