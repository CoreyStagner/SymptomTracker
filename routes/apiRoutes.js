console.log("Opened file [./routes/apiRoutes.js]");


var express = require('express');
var router = express.Router();

var model = require('../models');
// var model = require('../models/patients.js');


// Sandbox
module.exports = function(app){
  
  app.get("/api/patients", function(req, res){
    console.log("apiRoutes get '/api/patients'");
    model.patients.findAll({}).then(function(data){
      res.json(data);
      console.log(data);
    });// end .then()
  });// end router.get()

  app.get("/api/doctors", function(req, res){
    console.log("apiRoutes get '/api/doctors'");
    model.doctors.findAll({}).then(function(data){
      res.json(data);
      console.log(data);
    });// end .then()
  });// end router.get()
  
  app.get("/api/symptoms", function(req, res){
    console.log("apiRoutes post '/api/symptoms'");
    model.symptoms.findAll({}).then(function(data){
      res.json(data);
      console.log(data);
    });// end .then()
  });// end router.get()
  
  app.post("/api/symptoms", function(req, res) {
    model.symptoms.create(req.body).then(function(data) {
      res.json(data);
    });// end create.then()
  });// end app.post
};// end module.exports()
