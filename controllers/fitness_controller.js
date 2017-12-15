var express = require('express');
var path = require('path');
var router = express.Router();
var fitness = require('../models/fitness_models.js');

// Route to add a new registered user
router.post("/newUser", function (req, res) {
  console.log("/newUser route started");
  fitness.insertNewUser([
    "first_name", "last_name", "gender", "user_name", "password"
  ], [
      req.body.firstname,
      req.body.lastname,
      req.body.gender,
      req.body.email,
      req.body.password
    ], function (result) {
      console.log("insertNewUser route completed")
    });
})

// Route to add a new biometrics data
router.post("/biometrics", function (req, res) {
  console.log("/biometrics route started");
  fitness.insertBiometrics([
    "user_id", "date", "weight", "body_fat", "muscle_mass", "body_water", "bone_mass"
  ], [
      req.body.userid,  // userID to INSERT
      req.body.date,
      req.body.weight,
      req.body.bodyFat,
      req.body.muscleMass,
      req.body.bodyWater,
      req.body.boneMass,
    ], function (result) {
      console.log("insertBiometrics route completed");
      console.log("req from biometrics post: " + req);
    });
})

// Route to GET userID
router.post("/loginUser", function (req, res) {
  console.log("/loginUser route started");
  console.log("Router GET username: " + req.body.username);
  fitness.getUserInfo([
    "user_name"
  ], [
      req.body.username
    ], function (result) {
      console.log("loginUser route completed");
      console.log(result)
      //var loginID = result[0].user_id;
      var loginPassword = result[0].password;
      
      console.log("loginPassword = " + loginPassword);
      if (req.body.password === loginPassword) {
        console.log("Login Successful");
        res.json(result);
      } else { 
        console.log("Login Failed");
        var loginID = "";
        // What do we want to do?
      }
    });
})

// Route to add a new Workout data
router.post("/workoutdata", function (req, res) {
  console.log("/workoutdata route started");
  fitness.insertWorkoutdata([
    "user_id", "date", "exercise", "exercise_weight", "reps"
  ], [
      req.body.userid,  // userID to INSERT
      req.body.date,
      req.body.exercise,
      req.body.weight,
      req.body.reps
    ], function (result) {
      console.log("workoutData route completed");
  });
})

// Route to get user Weight Data for Charts
router.post("/weightChartData", function (req, res) {
  console.log("/weightChartData route started");
  fitness.getUserWeightData([
    "user_id"
  ], [
      req.body.userid
    ], function (result) {
      console.log("weightChartData route completed");
      console.log(result);
      res.json(result);
      })
    });

module.exports = router;

