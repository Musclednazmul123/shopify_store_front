const express =require('express')

const router = express.Router()
const {all_prodict} = require('../controllers/product.js')

router.route('/').get((req, res)=>all_prodict(req, res))

module.exports = router