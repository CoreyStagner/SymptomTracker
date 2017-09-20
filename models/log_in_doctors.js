console.log("Opened file [./models/log_in_doctors.js]");

module.exports = function(sequelize, DataTypes) {
  var log_in_doctors = sequelize.define("log_in_doctors", {
    doc_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end spec_uuid
    doc_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a username"
        }// end len
      }//end validate
    },// end spec_name
    doc_password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a password"
        }// end len
      }// end validate
    }// end spec_desc
  });// end define("log_in_doctors")
  return log_in_doctors;
};// end module.exports
