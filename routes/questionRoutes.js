// import express from 'express'
// const router = express.Router()
// import {getQuestionByUsername, setQuestion} from '../controllers/questionController.js'

const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionController.js');
const getQuestionByUsername = questionController.getQuestionByUsername;
const setQuestion = questionController.setQuestion;
const updateQuestion = questionController.updateQuestion;
const deleteQuestion = questionController.deleteQuestion;

router
.route('/question/:username')
.get(getQuestionByUsername)

router
.route('/question')
.post(setQuestion)
.put(updateQuestion)
.delete(deleteQuestion)


module.exports = router;
//export default router