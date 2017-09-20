console.log("Opened file [./models/log_in_user.js]");

module.exports = function(sequelize, DataTypes) {
  var log_in_user = sequelize.define("log_in_user", {
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
  });// end define("log_in_user")
  return log_in_user;
};// end module.exports
