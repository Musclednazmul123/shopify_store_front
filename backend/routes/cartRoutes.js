const express =require('express')
const {addToCart, getCart, cartAddItems, cartUpdateItems, cartRemoveItems}=require('../controllers/cart.js')

const router = express.Router()
// const {all_product, one_product} = require('../controllers/product.js')

router.route('/').get((req, res)=>getCart(req, res))
router.route('/add').post((req, res)=>addToCart(req, res))
router.route('/items/add').post((req, res)=>cartAddItems(req, res))
router.route('/items/remove').post((req, res)=>cartRemoveItems(req, res))
router.route('/items/update').get((req, res)=>cartUpdateItems(req, res))


module.exports = router