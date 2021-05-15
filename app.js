// var http = require('http');
// var logger = require('./logger')

// console.log("Server started")
// logger.log("hai")

// import express from 'express'
// import app from 'http'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import fs from 'fs'
// import path from 'path'
// import productRoutes from './routes/productRoutes.js'
// import userRoutes from './routes/userRoutes.js'
// import questionRoutes from './routes/questionRoutes.js'

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');



require('dotenv/config');


// const test = require('./test');
// const test = require('./query');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true })
                    .then((result) => {
                                        console.log("Connected to Db");
                                        mongoose.connection.dropDatabase();
                                    })
                    .catch((err) => console.log(err)); 

// const server = http.createServer((req, res) => {   // Creates a Server and connect to mongoDb database

// });

const app = express()
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/questions', questionRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server running on port ${PORT}...`))




// app.get("/getQuestionData", (req, res) => {
//     var username = "Tanvi";
//     getQuestionByUsername
// })

// app.get("/save", (req, res) => {
    
    
//     var i;
//     for (i = 0; i < 20; i++) {
//     var user = test.randomUser();
//     var question = test.randomQuestion();
    
    

//     user.save()
//     .then((result) => console.log(i))
//     .catch((err) => console.log(err));

//     question.save()
//     .then((result) => console.log(user.username, question.username))
//     .catch((err) => console.log(err));
//     }
// });

// app.get("/save1", (req, res) => {

// });