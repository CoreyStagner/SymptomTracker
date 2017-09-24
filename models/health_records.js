console.log("Opened file [./models/health_records.js]");

module.exports = function (sequelize, DataTypes) {
  var health_records = sequelize.define("health_records", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end id
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },// end createdAt
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }// end updatedAt
  });// end define("health_records")

  health_records.associate = function (models) {
    health_records.belongsTo(models.patients, {
    });// end health_records.hasMany()
  };// end health_records.associate()

  return health_records;
};// end module.exports
