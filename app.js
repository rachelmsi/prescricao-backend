require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const prescricao = require('./routes/prescricao-route');



//inicializacao do app
const app = express();


//Setup connection with mongodb
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://localhost:27017/prescricao';

const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/prescricao', prescricao);

let port = 8080;

app.listen(port, () => {
	console.log('Test is up and running on port number ' + port);
})
