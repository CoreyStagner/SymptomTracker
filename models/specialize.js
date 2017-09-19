console.log("Opened file [./models/specialize.js]");

module.exports = function(sequelize, DataTypes) {
  var specialize = sequelize.define("specialize", {
    splz_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },// end spec_uuid
    spec_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter ID of specialty"
        }// end len
      }//end validate
    }// end spec_id
  });// end define("specialize")
  return specialize;
};// end module.exports
