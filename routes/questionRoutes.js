// import express from 'express'
// const router = express.Router()
// import {getQuestionByUsername, setQuestion} from '../controllers/questionController.js'

const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionController.js');
const getQuestionByUsername = questionController.getQuestionByUsername;
const setQuestion = questionController.setQuestion;

router
.route('/question')
.get(getQuestionByUsername)
.put(setQuestion)


module.exports = router;
//export default router