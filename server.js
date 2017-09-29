console.log("Creating the environment for the Symptom Tracker Project");


//===============================================================
// Dependencies
//===============================================================

var express = require ('express');
var bodyParser = require ('body-parser');
var db = require('./models');
var sequelize = require("sequelize");
var exphbs = require("express-handlebars");
var moment = require('moment'); 

//===============================================================
// Set up Express App
//===============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Set up Handlebars
app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  partialsDir: [
    __dirname + '/views/partials',
  ]
}));
app.set("view engine", "handlebars");

// Routes

require('./controllers/controller.js')(app);

//===============================================================
// Syncing our sequelize models and then starting our Express app
//===============================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });//end app.listen()
});//end db.sequelize.sync().then(function())