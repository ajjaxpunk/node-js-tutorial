let mysql = require('mysql');
let config = require('./config.js');
 
  console.log(config);
let connection = mysql.createConnection(config);
 
let sql = `CALL ListAllStudents()`;
//For parameters
// let sql = `CALL GetStudent(?)`;
 
 var data='';

//connection.query(Query, Parameters, Callbacks

//For multiple parameters
//const employee = { name: 'Winnie', location: 'Australia' };
//connection.query(sql, employee, (error, results, fields) => {

connection.query(sql, true, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
  data= results[0];
}); 
connection.end();

var express = require("express");
var app= express();
var port=process.env.PORT ||3000;

app.route('/Node').get(function(request, response){
	response.send(data.toString());
});

app.get('/', function(request, response){
	response.send(JSON.stringify(data));
});

//app.get("/", function(req, res){
//    res.send("Welcome to NODEJS APP on Heroku!");
//});

app.listen(port);
