var express = require('express');
var path = require('path')

var router = express.Router();

var fitness = require('../models/fitness_models.js');




router.get("/hello", function (req, res) {
  res.send("hello");


});

router.get("/excer", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/excercise.html"));


});

router.get("/bio", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/biometrics.html"));


});

router.post("/api/biometrics", function (req, res) {
  console.log(req);
  console.log(req.body.weight);
  console.log(req.body.bodyFat);
  console.log(req.body.muscleMass);
  console.log(req.body.bodyWater);
  console.log(req.body.boneMass);
  console.log(req.body.user);
  //insert in model function
  fitness.insertBiometrics([
    "weight", "body_fat", "muscle_mass", "body_water", "bone_mass", "user_id, date"
  ],
    [
      req.body.weight, req.body.bodyFat, req.body.muscleMass, req.body.bodyWater, 
      req.body.boneMass, req.body.user, req.body.date
    ], function (biometricResult) {
      console.log(biometricResult);
      res.json({ id: biometricResult.insertId }); //find this from console.log
    }

  );

});





// Export routes for server.js to use.
module.exports = router;
