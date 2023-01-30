const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

//@desk Get All Users
//@route Get / Users
//@access Private
const getAllUsers = asyncHandler(async(req, res)=>{
    const users = await User.find().select('-password').lean()
    if (!users){
        return res.status(400).json({message: ' No userss found'})
    }

    res.json(users)
})


//@desk Create new user
//@route Post / Users
//@access Private
const createNewUser = asyncHandler(async(req, res)=>{
    const { username, password, roles} = req.body

    //confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({message:"All fields are required"})
    }

    //check duplicate user
    const duplicate = await User.findOne({username}).lean().exec()

    if (duplicate){
        return res.status(409).json({message:"User name taken"})
    }

    //Hash password
    const hashedPwd = await bcrypt.hash(password, 10) //salt round
    const userObject = {username, "password": hashedPwd, roles}

    //create and store new user
    const user = await User.create(userObject)

    if (user){
        res.status(201).json({message:`New user ${username} created`})
    } else{
        res.status(400).json({message:'Invalid user data recieved'})
    }
})
//@desk Update user
//@route Patch / Users
//@access Private
const updateUser = asyncHandler(async(req, res)=>{
    const {id, username, roles, active, password} = req.body

    //confirm data
    if (!id || !username || !password || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
        return res.status(400).json({message:"All fields are required"})
    }
    const user = await User.findById(id).exec()
    if (!user){
        return res.status(400).json({message:"User not found"})
    }

    //check duplicate
    const duplicate = await User.findOne(({username})).lean().exec()
    // Allow  update to the original user
    if (duplicate && duplicate?._id.toString() !== id){
        res.status(409).json({message:'Duplicate user name'})
    }

    user.username = username
    user.roles = roles
    user.active = active

    if(password){
        //hash password
        user.password = await bcrypt.hash(password, 10) //salt rounds
    }

    const userupdated = await user.save()
    res.json({message:`${userupdated.username} updated`})
})


//@desk delete user
//@route Post / Users
//@access Private
const deleteUser = asyncHandler(async(req, res)=>{

})

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}