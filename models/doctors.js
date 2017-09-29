console.log("Opened file [./models/doctors.js]");

module.exports = function (sequelize, DataTypes) {
  var doctors = sequelize.define("doctors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please enter your name"
        }// end len
      }//end validate
    },// end name
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please enter your password"
        }// end len
      }//end validate
    },// end pass
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("doctors")

  return doctors;
};// end module.exports
