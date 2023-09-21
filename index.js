const slenzie = {
    nameEvent: '',
    questions: [],
};

function Question(user, userQuestion, vote = 0, answered = false) {
   this.user = user; 
   this.userQuestion = userQuestion;
   this.vote = vote;
   this.answered = answered;  
}

function createEvent(slenzie, eventName) {
    if (typeof eventName !== 'string' || eventName.length < 5) {
    return "The input value is invalid."
    }
    slenzie.nameEvent = eventName;
    return slenzie;  
}

function addQuestion(slenzie, question){
if(!question.user){
    return "The user can't be empty";
}
if(!question.userQuestion){
    return "The question can't be null";
}
slenzie.question.push(question);
return slenzie;
}

function addVoteToQuestion(slenzie, index, value){
    if (index < 0 || index >= slenzie.questions.length){
        return "Question not found";
    }
    if (typeof value !== 'number' || value < 0){
        return "The value is not allowed."
    }
    slenzie.questions[index].vote += value;
    return "Vote registered succesfully";
}

function questionAnswered{
    
}
