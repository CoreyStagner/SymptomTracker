console.log("Opened file [./models/symptoms.js]");

var models = require('../models');

module.exports = function (sequelize, DataTypes) {
  var symptoms = sequelize.define("symptoms", {
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("symptoms")


  symptoms.associate = function(models) {
    symptoms.belongsTo(models.health_records, {
       foreignKey: {
         allowNull: false
       }
     });// end patient.belongsTo()
   };// end patients.associate()


  return symptoms;
};// end module.exports
