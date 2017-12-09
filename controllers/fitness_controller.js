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

router.post("/api/biometrics", function (req, res) {
  //insert in model function
  fitness.insertBiometrics([
    "weight", "body_fat", "muscle_mass", "body_water", "bone_mass"
  ],
    [
      req.body.weight, req.body.bodyFat, req.body.muscleMass, req.body.bodyWater, req.body.boneMass
    ], function (biometricResult) {
      console.log(biometricResult);
      res.json({ id: biometricResult.insertId }); //find this from console.log
    }

  )

});





// Export routes for server.js to use.
module.exports = router;
