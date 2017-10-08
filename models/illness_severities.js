console.log("Opened file [./models/illness_severities.js]");

module.exports = function (sequelize, DataTypes) {
  var illness_severities = sequelize.define("illness_severities", {
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
  });// end define("illness_severities")

  illness_severities.associate = function (models) {
    illness_severities.belongsTo(models.illnesses, {
    });// end illness_severities.belongsTo('illnesses')
    illness_severities.belongsTo(models.symptoms,{
    });// end illness_severities.hasMany('symptoms')
  };// end illness_severities.associate()

  return illness_severities;
};// end module.exports
