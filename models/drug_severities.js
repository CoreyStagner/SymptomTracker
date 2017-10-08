console.log("Opened file [./models/drug_severities.js]");

module.exports = function (sequelize, DataTypes) {
  var drug_severities = sequelize.define("drug_severities", {
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
  });// end define("drug_severities")

  drug_severities.associate = function (models) {
    drug_severities.belongsTo(models.drugs, {
    });// end drug_severities.belongsTo(drugs)
    drug_severities.belongsTo(models.symptoms,{
    });// end drug_severities.hasMany(symptoms)
  };// end drug_severities.associate()

  return drug_severities;
};// end module.exports
