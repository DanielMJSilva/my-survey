//importing modules
let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let cors = require('cors');
let path = require('path');

let app = express();

const route = require('../Routes/route');

let DB = require('./database');
//point mongoose to the DB URI
mongoose.connect(DB.URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Fail to connect to MongoDB:' + err);
    }
    
});

//Port
const PORT = 3000;

//adding middleware
app.use(cors());

//body-parse
app.use(bodyparser.json());

//static files
// app.use(express.static(path.join(__dirname, '../src')));

// routes
app.use('/api', route);

//Testing server
app.get('/', (req, res) => {
    res.send('Server working fine');
})

app.listen(PORT, () => {
    console.log(`Server connected at port:${PORT}`);
})

