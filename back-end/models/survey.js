const mongoose = require('mongoose');
const Question = required('./question')

// const SurverSchema = mongoose.Schema({
//     tile: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: false
//     },
//     questions: {
//         type: Array[Question],
//         required: true
//     }
// },
// {
//     collections: "surveys"
// });

// ainda nao estou certo qual modelo usar
const SurverSchema = mongoose.Schema({
    tile: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    questions:[{
        question: {
            type: String,
            required: true
        },
        options: [{
            option: {
                type: String,
                required: true
            }
        }]
    }] 
        
       
},
{
    collections: "surveys"
});


const Survey = module.exports = mongoose.model('Survey', SurverSchema);