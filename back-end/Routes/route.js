const express = require('express');
const router = express.Router();

const Survey = require('../models/survey');
const Question = require('../models/question');
const Option = require('../models/option');


router.get('/surveys', (req, res, next) => {
    Survey.find(function(err, surveys){
        res.json(surveys);
    })
});


// testar qual o melhor metodo. Colocar array objetos separaradamente ou tudo junto
// router.post('/survey', (req, res, next) => {
    
//     res.send(req.body);
// });

router.delete('/survey/:id', (req, res, next) => {
    Survey.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

module.exports = router;