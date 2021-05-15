const asyncHandler = require('express-async-handler');
const Question = require('../models/questionSchema');

const getQuestionByUsername = asyncHandler(
    async (req, res) => {
        const question = await Question.find({ username: req.body.username })

        if (question) {
            res.json(question)
        }
        else {
            res.status(404).json({ message: 'No user available' })
        }
    })


const setQuestion = asyncHandler(
    async (req, res) => {
        var question = await Question.create(req.body.user);

        if(question){
            res.status(201).json({
                name: question.username})
        }else{
            res.status(400)
            throw new Error('Invalid Question data')
        }


      
    }
);


module.exports = { getQuestionByUsername, setQuestion };

//export { getQuestionByUsername, setQuestion }