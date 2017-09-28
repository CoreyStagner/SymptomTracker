console.log("Opened file [./models/patients.js]");

module.exports = function (sequelize, DataTypes) {
  var patients = sequelize.define("patients", {
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
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
        }// end len
      }//end validate
    },// end salt
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("patients")

  patients.associate = function(models) {
   patients.belongsTo(models.doctors, {
      foreignKey: {
        allowNull: false,
      }
    });// end patient.belongsTo()
  };// end patients.associate()

  return patients;
};// end module.exports
