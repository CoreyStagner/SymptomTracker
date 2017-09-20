console.log("Opened file [./models/health_record.js]");

module.exports = function(sequelize, DataTypes) {
  var health_record = sequelize.define("health_record", {
    record_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },// end record_uuid
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a Patient"
        }// end len
      }//end validate
    },// end user_id
    doc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a Doctor"
        }// end len
      }//end validate
    },// end doc_id
    disease_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a Disease"
        }// end len
      }//end validate
    },// end user_id
    log_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1,50],
          msg: "Please enter a Log ID"
        }// end len
      }//end validate
    }// end log_id
  });// end define("health_record")
  return health_record;
};// end module.exports
