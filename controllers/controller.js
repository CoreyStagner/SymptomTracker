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

  app.get("/api/doctors", function(req, res){
    models.doctors.findAll({
      order: ["name"]
    });//end app.get("/api/doctors")
  });

  app.get("/api/patients", function(req, res){
    models.patients.findAll({
    });//end app.get("/api/patients")
  });

  app.get("/api/symptoms", function(req, res){
    models.symptoms.findAll({
    });//end app.get("/api/symptoms")
  });

  app.get("/api/health_records", function(req, res){
    models.health_records.findAll({
    });//end app.get("/api/health_records")
  });

  app.get("/api/admin", function(req, res) {
    console.log("User went to ('/api/admin')");
    var patientData = [];
    var doctorData = [];
    var symptomData = [];
    var recordData = [];

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
      res.render("admin", {patients: patientData, doctors: doctorData, symptoms: symptomData});
    });
  });// end app.get("/api/admin")

  app.get("/api/doctors/:id", function(req, res) {

    var recordData = [];
    // var patientsArray = [];
    // var patientsObject = {};

    models.health_records.findAll({
      include: [models.symptoms]
    })
    .then(function(records){
      recordData = records;
      console.log("recordData: ", recordData);
    });// end health_records.findAll({})

    models.patients.findAll({
      where: {
        doctorID: req.params.id
      }
    })// end findAll()
    .then(function(patientData) {

      // var object = {
      //   patient: ,
      //   record:
      // }

      res.render("doctors", {patients:patientData,  records:recordData});
    });// end .then()
  });// end app.get("/api/doctors/:id")

  app.get("/api/patients/:id", function(req, res) {
    var patientData = [];
    var recordData = [];
    var symptomData = [];
    var patID = req.params.id;

    models.health_records.findAll({
      where: {
        patientId: patID
      },
      include: [models.symptoms]
    })// end findAll()
    .then(function(records) {
      recordData = records;
      console.log("Record Data: ", recordData[0].dataValues.symptom.dataValues.name);
    });// end .then()

    models.patients.findAll({
      where: {
        id: req.params.id
      }
    })// end findAll()
    .then(function(patients) {
      patientData = patients;
      // console.log("patient Data: ", patientData);
    });// end .then()

    models.symptoms.findAll({
    })// end symptoms.findAll({})
    .then(function(symptomData) {
      // symptomData = symptoms;
      handlebars.registerPartial("symDDList", {symptoms:symptomData});
      res.render("patients", {symptoms:symptomData, patients:patientData, records:recordData});
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

  app.post("/api/health_records", function(req,res) {
    console.log("/api/health_records received a new patient post: ", req.body);
    models.health_records.create(req.body).then(function(data){
      res.json(data);
    });
    // res.redirect("/api/health_records");
  });// end app.post('/api/health_records')
};// end module.exports






// SANDBOX 
// study
// array methods filter, map, reduce