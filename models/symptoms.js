console.log("Opened file [./models/symptoms.js]");

module.exports = function(sequelize, DataTypes) {
  var symptoms = sequelize.define("symptoms", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter the name of the symptom"
        }// end len
      }//end validate
    },// end first_name
    focus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please the part of body affected"
        }// end len
      }// end validate
    },// end last_name
  });// end define("symptoms")

  // symptoms.associate = function(models) {
  //   // Associating symptoms with symptoms
  //   symptoms.hasMany(models.patient, {

  //   });// end hasMany()
  // };// end symptoms.associate

  // symptoms.associate = function(models) {
  //   // Associating symptoms with specialty
  //   symptoms.hasMany(models.specialty, {

  //   });// end hasMany()
  // };// end symptoms.associate
  
  return symptoms;
};// end module.exports
