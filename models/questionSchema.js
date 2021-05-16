var mangoose = require('mongoose');
const { stringify } = require('querystring');

var templateSchema = {
                        name: String,
                        desc: String,
                        img: String,
                     }


var questionSchema = {
                        username: 
                        {
                            type: String,
                            required: true,
                        },

                        question:
                        {
                            type: String//templateSchema
                        },

                        img:
                        {
                            type: String
                        },
                        
                        blank:
                        {
                            type: String
                        },

                        options:
                        {
                            type: [String]
                        },

                        tags:
                        {
                            type:[String]
                        }
}



module.exports = new mangoose.model('question', questionSchema);