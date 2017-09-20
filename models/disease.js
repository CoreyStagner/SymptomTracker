console.log("Opened file [./models/doctors.js]");

module.exports = function(sequelize, DataTypes) {
  var disease = sequelize.define("disease", {
    disease_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// endisease_uuid
    disease_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter name of disease"
        }// end len
      }//end validate
    },// endisease_fname
    disease_desc: {
      type: DataTypes.BLOB,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a description of disease"
        }// end len
      }//end validate
    }// endisease_fname
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
  
  return disease;
};// end module.exports
