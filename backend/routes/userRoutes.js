const express =require('express')

const router = express.Router()

const userControler = require('../controllers/userController')

router.route('/').get(userControler.getAllUsers).post(userControler.createNewUser).patch(userControler.updateUser).delete(userControler.deleteUser)
router.route('/home').get((req,res)=>{
    console.log('hello world')
})

module.exports = router