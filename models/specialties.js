console.log("Opened file [./models/specialties.js]");

module.exports = function(sequelize, DataTypes) {
  var specialties = sequelize.define("specialties", {
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
          msg: "Please enter a new specialties"
        }// end len
      }//end validate
    },// end spec_name
    spec_desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a description for this specialty"
        }// end len
      }// end validate
    }// end spec_desc
  });// end define("specialties")
  return specialties;
};// end module.exports
