//adding express to use
var express = require('express');

//log all of the request from a user
var morgan = require('morgan');

//using express objects
var app = express();

//used to run the Middleware
app.use(morgan('dev'));

//setting the port into a variable for caching
var port = 3000;

//telling the server to get information from url
app.get('/', function(res,req){
    var name = "Marcus";
    req.json("My name is " + name);
});

//running the server on port 3000
app.listen(port, function(err){
    if(err){
        throw err;
    }else{
        console.log("Server is running on port: " + port);
    }
});