// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var fitness = {

insertBiometrics: function(columns, columnValues, cb) {
    orm.insertOne("biometrics", columns, columnValues, function(res) {
      cb(res);
    });
  },
  
  
insertWorkoutdata: function(columns, columnValues, cb) {
    orm.insertOne("workoutdata", columns, columnValues, function(res) {
      cb(res);
    });
  },

};



module.exports = fitness;