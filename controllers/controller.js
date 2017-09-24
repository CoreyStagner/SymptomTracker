console.log("Opened file [./controllers/controller.js]");

var path = require("path");
var models = require('../models');
var async = require('async');
var handlebars = require("handlebars");

module.exports = function(app){

  //====== Get Methods

  // Sets up the home page
  app.get("/", function(req, res) {
    console.log("User went to ('/')");
    res.render("index");
  });// end app.get("/")

  app.get("/api/patients", function(req, res) {
    console.log("User went to ('/api/patients')");
    var patientData = [];
    var doctorData = [];
    models.patients.findAll({
      // include: [models.patients]
    }).then(function(patients) {
      patientData = patients;
      // res.render("patients", {patients:patients});
    });

    models.doctors.findAll({
    }).then(function(doctors) {
      // console.log(doctors);
      doctorData = doctors;
      handlebars.registerPartial("docDDList", {doctors:doctorData});
      res.render("patients", {patients: patientData, doctors: doctorData});
    });
  });// end app.get("/patients")

  app.get("/api/doctors", function(req, res) {
    console.log("User went to ('/doctors')");
    models.doctors.findAll({
      // include: [models.doctors]
    }).then(function(doctors) {
      res.render("doctors", doctors);
    });
  });// end app.get("/doctors")

  //====== Post Methods
  app.post("/api/patients", function(req,res) {
    console.log("/api/patients received a new patient post: " + req.body.name);
    models.patients.create(req.body).then(function(data){
      res.json(data);
    });
    // res.redirect("/api/patients");
  });// end app.post('/api/patients')

  app.post("/api/doctors", function(req,res) {
    console.log("/api/doctors received a new doctor post: " + req.body.name);
    models.doctors.create(req.body).then(function(data){
      res.json(data);
    });
    // res.redirect("/api/doctors");
  });// end app.post('/api/doctors')

};// end module.exports