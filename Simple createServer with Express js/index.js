var express = require("express");
var app= express();
var port=process.env.PORT ||3000;

app.get("/", function(request, response){
    response.send("Welcome to NODEJS APP on Heroku!");
});

app.listen(port);
