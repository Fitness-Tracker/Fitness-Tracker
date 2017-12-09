// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var fitness = {

insertBiometrics: function(columns, columnValues, cb) {
  console.log(columns);
  console.log(columnValues);
    orm.insert("biometrics", columns, columnValues, function(res) {
      cb(res);
    });
  },
  
  
insertWorkoutdata: function(columns, columnValues, cb) {
    orm.insert("workoutdata", columns, columnValues, function(res) {
      cb(res);
    });
  },

};



module.exports = fitness;