// import express from 'express'
// const router = express.Router()
// import {getUserByUsername, setUser} from '../controllers/userController.js'


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
 
console.log(userController);
const getUserProfile = userController.getUserProfile;
const updateUserProfile = userController.updateUserProfile;
const registerUser = userController.registerUser;
const authUser = userController.authUser;
const protect = authMiddleware.protect;


router
.route('/login')
.post((req, res) => { authUser});

// router
// .route('/user')
// .get((req, res) => {protect}, (req, res) => {getUserProfile})
// .put((req, res) => {protect}, (req, res) => {updateUserProfile})


router
.route('/user')
.get((req, res) => {getUserProfile})
.put((req, res) => {updateUserProfile})


router.route('/')
.post((req, res) => { registerUser})


module.exports = router;
// export default router