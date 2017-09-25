var express  = require('express');
var router   = express.Router();
var app      = express();
var mongoose = require('mongoose');

// define all static path
app.use(express.static('public'));
//connect to mongodb
mongoose.connect('mongodb://localhost/maalgaadi');

// grab all the model
var User = require(__dirname+'/models/user');

//grab all routes 
const routes = require(__dirname+'/routes/routes');
const userRoutes = require(__dirname+'/routes/user.routes');

//  Connect all our routes to our application
app.use('/', routes);
app.use('/', userRoutes);






//serve on tcp port 3000
app.listen(3000);