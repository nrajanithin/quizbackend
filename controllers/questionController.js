const asyncHandler = require('express-async-handler');
const Question = require('../models/questionSchema');

const getQuestionByUsername = asyncHandler(
    async (req, res) => {
        const question = await Question.find({ username: req.params.username })

        if (question) {
            res.json(question)
        }
        else {
            res.status(404).json({ message: 'No user available' })
        }
    })


const setQuestion = asyncHandler(
    async (req, res) => {
        var question = Question(req.question)

        question.save((err, doc) => {
            if (err) {
                res.status(404).json({ message: 'question Data is saved' });
            }
            else {
                res.status(200);
            }
        });
    }
);


module.exports = { getQuestionByUsername, setQuestion };

//export { getQuestionByUsername, setQuestion }