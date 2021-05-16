// import asyncHandler from 'express-async-handler'
// // import User from '../models/userSchema'
// const asyncHandler = require('express-async-handler');


const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');
const generateToken = require('../utils/generateToken.js')

const  authUser= asyncHandler(
    async (req, res) => {
        const {email, password} = req.body
        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                isProducer: user.isProducer,
                token: generateToken(user._id),
            })
        }else {
            res.status(401)
            throw new Error('Invalid email or password')
        }
    })

//Get user profile 
const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            isProducer: user.isProducer,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})
//Update User profile
const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isProducer: updatedUser.isProducer,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})
//Register new user
const registerUser = asyncHandler(async(req, res) => {
    console.log("Load get user")
    const {username, email, password, isProducer} = req.body
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        username,
        email,
        password,
        isProducer
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isProducer: user.isProducer,
            token: generateToken(user._id),   
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

module.export = {authUser, getUserProfile, updateUserProfile, registerUser}
















// const asyncHandler = require('express-async-handler');
// const User = require('../models/userSchema');

// const getUserByUsername = asyncHandler(
//     async (req, res) => {
//         const user = await User.find({ username: req.body.username })
//         if (user) {
//             res.json(user)
//         }
//         else {
//             res.status(404).json({ message: 'No user available' })
//         }
//     })




// const setUser = asyncHandler(
//     async (req, res) => {
        
//         const user = await User.create(req.body.user);
//         if(user){
//             res.status(201).json({
//                 name: user.username,
//                 password: user.password
//             })
//         }else{
//             res.status(400)
//             throw new Error('Invalid user data')
//         }
//         // user.save((err, doc) => {
//         //     if (err) {
//         //         res.status(404).json({ message: 'user data Data is not saved' });
//         //     }
//         //     else {
//         //         res.status(200);
//         //     }
//         // });
//     })



// module.exports = { getUserByUsername, setUser };
// //export { getUserByUsername, setUser }