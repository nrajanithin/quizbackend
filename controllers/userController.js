// import asyncHandler from 'express-async-handler'
// // import User from '../models/userSchema'
// const asyncHandler = require('express-async-handler');
const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');

const getUserByUsername = asyncHandler(
    async (req, res) => {
        const user = User.find({ username: req.username })
        if (user) {
            res.json(user)
        }
        else {
            res.status(404).json({ message: 'No user available' })
        }
    })




const setUser = asyncHandler(
    async (req, res) => {
        
        var body = req.body;
        const user = await User.create(req.body.user);
        if(user){
            res.status(201).json({
                name: user.username,
                password: user.password
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
        // user.save((err, doc) => {
        //     if (err) {
        //         res.status(404).json({ message: 'user data Data is not saved' });
        //     }
        //     else {
        //         res.status(200);
        //     }
        // });
    })



module.exports = { getUserByUsername, setUser };
//export { getUserByUsername, setUser }