console.log("Opened file [./models/patient_severities.js]");

module.exports = function (sequelize, DataTypes) {
  var patient_severities = sequelize.define("patient_severities", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    severity_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },// end severity
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },// end notes
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("patient_severities")

  patient_severities.associate = function (models) {
    patient_severities.belongsTo(models.patients, {
    });// end patient_severities.belongsTo('patients')
    patient_severities.belongsTo(models.symptoms,{
    });// end patient_severities.hasMany('symptoms')
  };// end patient_severities.associate()

  return patient_severities;
};// end module.exports
