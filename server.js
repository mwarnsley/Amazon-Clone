//adding express to use
var express = require('express');

//using express objects
var app = express();

//setting the port into a variable for caching
var port = 3000;

//running the server on port 3000
app.listen(port, function(err){
    if(err){
        throw err;
    }else{
        console.log("Server is running on port: " + port);
    }
});