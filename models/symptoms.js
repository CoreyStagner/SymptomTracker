console.log("Opened file [./models/symptoms.js]");

module.exports = function(sequelize, DataTypes) {
  var symptoms = sequelize.define("symptoms", {
    sym_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end sym_id
    sym_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the symptoms name"
        }// end len
      }//end validate
    },// end sym_name
    sym_desc: {
      type: DataTypes.BLOB,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the symptoms description"
        }// end len
      }//end validate
    }// end sym_desc
  });// end define("symptoms")

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
  
  return symptoms;
};// end module.exports
