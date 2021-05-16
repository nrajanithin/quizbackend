const asyncHandler = require('express-async-handler');
const Question = require('../models/questionSchema');

const getQuestionByUsername = asyncHandler(
    async (req, res) => {
        var question = await Question.find({ username: req.body.username })
        if (question) {
            res.json(question)
        }
        else {
            res.status(404).json({ message: 'No user available' })
        }
    })


const setQuestion = asyncHandler(
    async (req, res) => {
        console.log("Don")
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



const updateQuestion = asyncHandler(
    async (req, res) => {
        console.log(req.body._id, req.body.user)
        var question = await Question.findByIdAndUpdate(req.body._id, req.body.user);

        if(question){
            res.status(201).json({
                name: question.username})
        }else{
            res.status(400)
            throw new Error('Invalid Question data update')
        }
    }
);


const deleteQuestion = asyncHandler(
    async (req, res) => {
        var question = await Question.findByIdAndDelete(req.body._id);

        if(question){
            res.status(201).json({
                status: "Question is deleted"})
        }else{
            res.status(400)
            throw new Error('Invalid Question data update')
        }
    }
);

module.exports = { getQuestionByUsername, setQuestion, updateQuestion, deleteQuestion};

//export { getQuestionByUsername, setQuestion }