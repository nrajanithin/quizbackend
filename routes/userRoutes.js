// import express from 'express'
// const router = express.Router()
// import {getUserByUsername, setUser} from '../controllers/userController.js'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const getUserByUsername = userController.getUserByUsername;
const setUser = userController.setUser;


router
.route('/user')
.get(getUserByUsername)
.put(setUser)


module.exports = router;
// export default router