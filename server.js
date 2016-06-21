console.log('start of app')
var express = require('express');
path = require('path');
var bodyParser = require('body-parser');
mongoose = require('mongoose')
app = express()
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')();
app.listen(8000, function(){
  console.log('80000000000000000000000')
})
