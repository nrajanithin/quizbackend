function getByUser(username, User) {
    User.find({username: username}, (err, result) => {
        if (err){
            console.log(err);
        }
        else{
            return result;
        }
    });
}

function getQuestionByUser(username, Question) {
    Question.find({username: username}, (err, result) => {
                if (err){
                    console.log(err);
                }
                else{
                    return result;
                }
            });
}

module.exports = { getByUser, getQuestionByUser};