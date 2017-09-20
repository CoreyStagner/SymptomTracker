console.log("Opened file [./models/log_in_doctors.js]");

module.exports = function(sequelize, DataTypes) {
  var log_in_doctors = sequelize.define("log_in_doctors", {
    spec_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end spec_uuid
    spec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a new log_in_doctors"
        }// end len
      }//end validate
    },// end spec_name
    spec_desc: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a description for this specialty"
        }// end len
      }// end validate
    }// end spec_desc
  });// end define("log_in_doctors")
  return log_in_doctors;
};// end module.exports
