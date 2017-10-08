console.log("Opened file [./models/diagnoses.js]");

module.exports = function (sequelize, DataTypes) {
  var diagnoses = sequelize.define("diagnoses", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },// end notes
    diagnosedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },// end diagnosedDate
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }// end updatedAt
  });// end define("diagnoses")

  diagnoses.associate = function (models) {
    diagnoses.belongsTo(models.patients, {
    });// end diagnoses.belongsTo('patients')
  };// end diagnoses.associate()
  return diagnoses;
};// end module.exports
