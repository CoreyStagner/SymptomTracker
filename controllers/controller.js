console.log("Opened file [./controllers/controller.js]");

var path = require("path");
var models = require('../models');
var async = require('async');
var handlebars = require("handlebars");
var crypto = require('crypto');
var moment = require('moment');
var sequelize = require('sequelize');

module.exports = function(app){

  //===============================
  //====== Get Methods
  //===============================

  app.get("/calendar", function(req, res) {
    res.render("calendar");
  });

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

    // Basic Routes
    //===============================


      // Sets up the home page
      app.get("/", function(req, res) {
        // console.log("User went to ('/')");
        res.render("index");
      });// end app.get("/")

      // Set up basic Doctor route
      app.get("/api/doctors", function(req, res){
        models.doctors.findAll({
          order: ["name"]
        });//end app.get("/api/doctors")
      });

      // Set up basic Patient route
      app.get("/api/patients", function(req, res){
        models.patients.findAll({
        });//end app.get("/api/patients")
      });

      // Set up basic Symptom route
      app.get("/api/symptoms", function(req, res){
        models.symptoms.findAll({
        });//end app.get("/api/symptoms")
      });

      // Set up basic Health Record route
      app.get("/api/health_records", function(req, res){
        models.health_records.findAll({
        });//end app.get("/api/health_records")
      });

      // Set up basic Admin route
      app.get("/api/admin", function(req, res) {
        // console.log("User went to ('/api/admin')");
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


    // Focused Routes
    //===============================


      // Sets up Route for a Specific Doctor to show all of thier patients
      app.get("/doctors/:id", function(req, res) {

        var recordData = [];
        // var patientsArray = [];
        // var patientsObject = {};

        models.health_records.findAll({
          include: [models.symptoms]
        })
        .then(function(records){
          recordData = records;
          // console.log("recordData: ", recordData);
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

      // Sets up Route for a Specific Patient to show all of thier Health Records
      app.get("/patients/:id", function(req, res) {
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

      app.get("/patients/log/:id", function(req, res) {
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
          unformattedData = records;
          unformattedData.forEach(function (input){
            var formattedData = {
              id: input.dataValues.id,
              notes: input.dataValues.notes,
              createdAt: moment(input.dataValues.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
              symptom: input.dataValues.symptom.dataValues.name
            }
            recordData.push(formattedData);
          });
        
          // recordData = records;
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
          res.render("records", {symptoms:symptomData, patients:patientData, records:recordData});
        });// end .then()
      });// end app.get("/api/doctors/:id")


    // Authentication Routes
    //===============================

      // Sets up a route to create a new user
      app.get("/userSignup", function(req, res){
        var doctorData = [];
        models.doctors.findAll({
          order: ["name"]
        }).then(function(doctors) {
          // console.log(doctors);
          doctorData = doctors;
          handlebars.registerPartial("docDDList", {doctors:doctorData});
          res.render("userSignup", {doctors:doctorData}); 
        });
      });// end app.get("/userSignup")

      // Sets up a route to login a user
      app.get("/userLogin", function(req, res){
        res.render("userLogin");
      });// end app.get("/userLogin")

      // Sets up a route to login a user
      app.get("/doctorLogin", function(req, res){
        res.render("doctorLogin");
      });// end app.get("/doctorLogin")

























  //================================
  //====== Post Methods
  //================================


    // New Database Entry Post Routes
    //===============================
      
      
      // Post Route for a new Patient
      app.post("/api/patients", function(req,res) {
        // console.log("/api/patients received a new patient post: " + req.body);
        models.patients.create(req.body).then(function(data){
          res.json(data);
        });
        // res.redirect("/");
      });// end app.post('/api/patients')

      // Post Route for a new Doctor
      app.post("/api/doctors", function(req,res) {
        // console.log("/api/doctors received a new doctor post: " + req.body.name);
        models.doctors.create(req.body).then(function(data){
          res.json(data);
        });
        // res.redirect("/api/doctors");
      });// end app.post('/api/doctors')

      // Post Route for a new Symptom
      app.post("/api/symptoms", function(req,res) {
        // console.log("/api/symptoms received a new patient post: " + req.body.name);
        models.symptoms.create(req.body).then(function(data){
          res.json(data);
        });
        // res.redirect("/api/symptoms");
      });// end app.post('/api/symptoms')

      // Post Route for a new Health Record
      app.post("/api/health_records", function(req,res) {
        console.log("/api/health_records received a new patient post: ", req.body);
        models.health_records.create(req.body)
        .then(function(data){
          res.json(data);
        });// end .then()
        // res.redirect("/api/health_records");
      });// end app.post('/api/health_records')

      
    // Authentication Routes
    //===============================

      // Post route to verify if user is true
      app.post("/userLogin", function(req, res) {
        // console.log("posted:", req.body);
        var enteredPass = req.body.userPassword;
        // var salt = "54d6f7g8h9j0k9j8h7gf6";
        // var data = req.body.pass + salt;
        // var md5Pw = crypto.createHash('md5').update(data).digest("hex");
        models.patients.findAll({ where: {
          name: req.body.userName
        }}).then(function (response) {
          // console.log("response: ", response);

          if (req.body.userPassword !== response[0].dataValues.pass) {
            res.send('Failed to authenticate');
          } else {
            res.redirect("/patients/" + response[0].dataValues.id);
          }// end if/else()
        });// end .then()
      });// end app.post("/userLogin")

      // app.post("/userLogin", function(req, res) {
      //   console.log("posted:", req.body);
      //   var salt = "54d6f7g8h9j0k9j8h7gf6";
      //   var data = req.body.pass + salt;
      //   var md5Pw = crypto.createHash('md5').update(data).digest("hex");
      //   models.patients.findAll({ where: {
      //     name: req.body.userName
      //   }}).then(function (response) {
      //     console.log(response);

      //     if (md5Pw !== response[0].dataValues.password) {
      //       res.send('Failed to authenticate');
      //     } else {
      //       res.redirect("/patients/" + response[0].dataValues.id);
      //     }// end if/else()
      //   });// end .then()
      // });// end app.post("/userLogin")

      app.post("/userSignup", function(req, res) {
        // console.log(req);
        var salt = "54d6f7g8h9j0k9j8h7gf6";
        var data = req.body.password + salt;
        var md5Pw = crypto.createHash('md5').update(data).digest("hex");
        
        models.patients.create({
          username: req.body.username,
          password: md5Pw,
          salt: salt
        }).then(function(newUser) {
          // res.redirect("/");
          res.render("userLogin");
        });// end .then()
      });// end app.post("/userSignup")

      app.post("/doctorLogin", function(req, res) {
        // console.log("posted:", req.body);
        var enteredPass = req.body.userPassword;
        // var salt = "54d6f7g8h9j0k9j8h7gf6";
        // var data = req.body.pass + salt;
        // var md5Pw = crypto.createHash('md5').update(data).digest("hex");
        models.doctors.findAll({ where: {
          name: req.body.userName
        }}).then(function (response) {
          // console.log("response: ", response);

          if (req.body.userPassword !== response[0].dataValues.pass) {
            res.send('Failed to authenticate');
          } else {
            res.redirect("/doctors/" + response[0].dataValues.id);
          }// end if/else()
        });// end .then()
      });// end app.post("/doctorLogin")
      
};// end module.exports