console.log("Opened file [./models/illnesses.js]");

var models = require('../models');

module.exports = function (sequelize, DataTypes) {
  var illness = sequelize.define("illnesses", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please enter a symptom"
        }// end len
      }//end validate
    },// end name
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },// end desc
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("illness")

    

  illness.associate = function(models) {
    illness.hasMany(models.diagnoses, {
     });// end patient.belongsTo()
   };// end patients.associate()


  return illness;
};// end module.exports
