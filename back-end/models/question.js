const mongoose = require('mongoose');
const Option = require('./option');

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array[Option],
        required: true
    }
},
{
    collections: "questions"
})

const Question = module.exports = mongoose.model('Question', QuestionSchema);