console.log("Opened file [./routes/htmlRoutes.js]");

var express = require('express');
var router = express.Router();
var path = require('path');
var model = require('../models');

module.exports = function(app){
  app.get("/", function(req, res){
    model.patients.findAll({}).then(function(data) {
      console.log(data);
      var hbsObject = {
        patients: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });

    res.sendFile(path.join(__dirname, "../public/index.html"));
  });// end app.get()
}// end module.exports()







// module.exports = function(app){   
//   app.get("/", function(req, res){
//     console.log("htmlRoutes get '/'");
//     res.sendFile(path.join(__dirname, "../public/tables.html"));
//     // model.patients.findAll({}).then(function(data){
//     //   res.json(data);
//     //   console.log(data);
//     });// end .then()
//   });// end router.get()
// };// end module.exports()