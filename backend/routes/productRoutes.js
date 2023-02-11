const express =require('express')

const router = express.Router()
const {all_product, one_product} = require('../controllers/product.js')

router.route('/').post((req, res)=>all_product(req, res))
router.route('/:id').post((req, res)=>one_product(req, res))

module.exports = router