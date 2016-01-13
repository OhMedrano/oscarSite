process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var express = require('./config/express');
var app = express()




app.listen(3000);

console.log("AYYY 3-DOG COMIN' AT YA AT LOCALHOST:3000");

module.exports = app;