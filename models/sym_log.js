console.log("Opened file [./models/sym_log.js]");

module.exports = function(sequelize, DataTypes) {
  var sym_log = sequelize.define("sym_log", {
    log_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end doc_uuid
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the user's ID"
        }// end len
      }//end validate
    },// end doc_fname
    sym_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the symptoms ID"
        }// end len
      }//end validate
    },// end doc_fname
    log_desc: {
      type: DataTypes.BLOB,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the log's description"
        }// end len
      }//end validate
    }// end doc_fname
  });// end define("sym_log")

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
  
  return sym_log;
};// end module.exports
