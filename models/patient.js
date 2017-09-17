console.log("Opened file [./models/patient.js]");

module.exports = function(sequelize, DataTypes) {
  var patient = sequelize.define("patient", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter your first name"
        }// end len
      }//end validate
    },// end first_name
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter your last name"
        }// end len
      }// end validate
    },// end last_name
    phone_number:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 10,
          msg: "Please enter a 10 digit phone number with no parenthesis ex. 5551234567"
        }// end len
      }// end validate
    }// end phone_number
  });// end define("patient")

  patient.associate = function(models) {
    // Associating patient with doctor
    patient.hasMany(models.doctor, {

    });// end hasMany()
  };// end patient.associate

  patient.associate = function(models) {
    // Associating patient with disease
    patient.hasMany(models.disease, {

    });// end hasMany()
  };// end patient.associate
  
  return patient;
};// end module.exports
