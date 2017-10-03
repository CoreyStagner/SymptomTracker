console.log("Opened file [./models/patients.js]");

module.exports = function (sequelize, DataTypes) {
  var patients = sequelize.define("patients", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please enter your first name"
        }// end len
      }//end validate
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 50],
          msg: "Please enter your last name"
        }// end len
      }//end validate
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1, 3],
          msg: "Please enter your age"
        }// end len
      }//end validate
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 6],
          msg: "Please enter your gender"
        }// end len
      }//end validate
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 20],
          msg: "Please enter your username"
        }// end len
      }//end validate
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 6],
          msg: "Please enter your gender"
        }// end len
      }//end validate
    },
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
