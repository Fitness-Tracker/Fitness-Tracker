// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var fitness = {

getUserInfo: function(columns, columnValues,cb) {  // New property to get an existing user data
    console.log("fitness_models.js - getUserInfo");
    orm.get("users", columns, columnValues, function(res) {  //columns, columnValues come from fitness_controller.js
      cb(res)
    })
  },

getUserWeightData: function(columns, columnValues, cb) {  // Property to get User Weight Data from biometrics
    orm.get1("biometrics", columns, columnValues, function(res) {  //columns, columnValues come from fitness_controller.js
     cb(res)
   })
  },

insertNewUser: function(columns, columnValues,cb) {  // New property to add a new registered user
  console.log("fitness_models.js - insertNewUser");
  orm.insert("users", columns, columnValues, function(res) {  //columns, columnValues come from fitness_controller.js
    cb(res)
  })
},

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

getAllWorkouts: function(cb) {  // Changed property name from "all" to "getAllWorkouts" to make more clear what the property does.
    orm.all("workoutdata", function(res) {
      cb(res);
    });
  },

}

module.exports = fitness;
