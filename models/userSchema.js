var mangoose = require('mongoose');

userSchema = {
                username: 
                {
                    type: String,
                    required: true,
                },

                password:
                {
                    type: String,
                    required: true,
                }
}



module.exports = new mangoose.model('user', userSchema);