console.log("Opened file [./controllers/controller.js]");

var express = require('express');
var router = express.Router();

var model = require('../models');

module.exports = function(app){
  app.get("/", function(req, res){
    res.render("index");
  });// end app.get("/patients");

  app.get("/patients", function(req, res){
    model.patients.findAll({}).then(function(data) {
      console.log(data);
      var hbsObject = {
        patients: data
      };
      console.log(hbsObject);
      res.render("patients", hbsObject);
    });// end findAll.end()
  });// end app.get("/patients");

  app.get("/doctors", function(req, res){
    model.doctor.findAll({}).then(function(data) {
      console.log(data);
      var hbsObject = {
        doctors: data
      };
      console.log(hbsObject);
      res.render("doctors", hbsObject);
    });// end findAll.end()
  });// end app.get("/patients");

  app.get("/symptoms", function(req, res){
    model.symptoms.findAll({}).then(function(data) {
      console.log(data);
      var hbsObject = {
        symptoms: data
      };
      console.log(hbsObject);
      res.render("symptoms", hbsObject);
    });// end findAll.end()
  });// end app.get("/patients");
}// end module.exports