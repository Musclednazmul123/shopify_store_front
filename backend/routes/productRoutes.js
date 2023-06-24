const express =require('express')

const router = express.Router()
const {all_product, one_product} = require('../controllers/product.js')

router.route('/').get((req, res)=>all_product(req, res))
router.route('/:handle').get((req, res)=>one_product(req, res))

module.exports = router