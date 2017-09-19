console.log("Opened file [./models/doctors.js]");

module.exports = function(sequelize, DataTypes) {
  var doctors = sequelize.define("doctors", {
    doc_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end doc_uuid
    splz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter doctor's Specialty"
        }// end len
      }//end validate
    },// end doc_fname
    doc_fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter doctors first name"
        }// end len
      }//end validate
    },// end doc_fname
    doc_lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter doctors last name"
        }// end len
      }//end validate
    },// end doc_lname
    doc_ph_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,10],
          msg: "Please enter doctors phone number"
        }// end len
      }//end validate
    }// end doc_fname
  });// end define("doctors")

  // doctor.associate = function(models) {
  //   // Associating doctor with doctor
  //   doctor.hasMany(models.patient, {

  //   });// end hasMany()
  // };// end doctor.associate

  // doctor.associate = function(models) {
  //   // Associating doctor with docialty
  //   doctor.hasMany(models.docialty, {

  //   });// end hasMany()
  // };// end doctor.associate
  
  return doctors;
};// end module.exports
