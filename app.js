var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var i18n = require('node-i18n-util');
var msgs = require('./msgs.properties');


app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res)=> {
    res.send('Check the console man on terminal');
});

var data = 'Are you sure you want to delete the project';
var dataString = '';

keys = data.split(' ');
keys.map(key => {
    dataString += msgs.get(key);
    dataString += ' ';
});
 console.log(dataString);

app.listen(3000, (err) => {
    if(err) console.log(err);
    console.log("Server running on port 3000");
});