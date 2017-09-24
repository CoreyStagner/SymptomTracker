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

  app.get("/api/admin", function(req, res) {
    console.log("User went to ('/api/admin')");
    var patientData = [];
    var doctorData = [];
    var symptomData = [];
    models.patients.findAll({})
    .then(function(patients) {
      patientData = patients;
      // res.render("patients", {patients:patients});
    });// end patients.findAll({})
  
    models.symptoms.findAll({})
    .then(function(symptoms) {
      symptomData = symptoms;
    });// end symptoms.findAll({})

    models.doctors.findAll({
      order: ["name"]
    }).then(function(doctors) {
      // console.log(doctors);
      doctorData = doctors;
      handlebars.registerPartial("docDDList", {doctors:doctorData});
      res.render("patients", {patients: patientData, doctors: doctorData, symptoms: symptomData});
    });
  });// end app.get("/api/admin")

  app.get("/api/doctors/:id", function(req, res) {
    models.patients.findAll({
      where: {
        doctorID: req.params.id
      }
    })// end findAll()
    .then(function(patientData) {
      res.render("doctors", {patients:patientData});
    });// end .then()
  });// end app.get("/api/doctors/:id")


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

  app.post("/api/symptoms", function(req,res) {
    console.log("/api/symptoms received a new patient post: " + req.body.name);
    models.symptoms.create(req.body).then(function(data){
      res.json(data);
    });
    // res.redirect("/api/symptoms");
  });// end app.post('/api/symptoms')

};// end module.exports