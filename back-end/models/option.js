const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema({
    option: {
        type: String,
        required: true
    }
},
{
    collections: "options"
});

const Option = module.exports = mongoose.model('Option', OptionSchema);