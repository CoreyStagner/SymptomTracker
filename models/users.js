console.log("Opened file [./models/users.js]");

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end user_id
    user_fname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter your first name"
        }// end len
      }//end validate
    },// end first_name
    user_lname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter your last name"
        }// end len
      }// end validate
    },// end last_name
    user_gender:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10,10],
          msg: "Please enter your gender"
        }// end len
      }// end validate
    },// end user_gender
    user_age:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [10,10],
          msg: "Please enter your age"
        }// end len
      }// end validate
    },// end user_age
    user_weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [10,10],
          msg: "Please enter your weight"
        }// end len
      }// end validate
    }// end user_weight
  });// end define("users")

  // user.associate = function(models) {
  //   // Associating user with doctor
  //   user.hasMany(models.doctor, {

  //   });// end hasMany()
  // };// end user.associate

  // user.associate = function(models) {
  //   // Associating user with disease
  //   user.hasMany(models.disease, {

  //   });// end hasMany()
  // };// end user.associate
  
  return users;
};// end module.exports
