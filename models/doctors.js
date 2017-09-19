console.log("Opened file [./models/doctor.js]");

module.exports = function(sequelize, DataTypes) {
  var doctors = sequelize.define("doctor", {
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
  });// end define("doctor")

  // doctor.associate = function(models) {
  //   // Associating doctor with doctor
  //   doctor.hasMany(models.patient, {

  //   });// end hasMany()
  // };// end doctor.associate

  // doctor.associate = function(models) {
  //   // Associating doctor with specialty
  //   doctor.hasMany(models.specialty, {

  //   });// end hasMany()
  // };// end doctor.associate
  
  return doctors;
};// end module.exports
