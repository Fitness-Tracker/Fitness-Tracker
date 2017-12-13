var express = require('express');
var path = require('path')

var router = express.Router();

var fitness = require('../models/fitness_models.js');




// router.get("/hello", function (req, res) {
//   res.send("hello");


// });

router.get("/excer", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/dataEntry.html"));
//   fitness.all(function (dataStats) {
//     console.log(JSON.stringify(dataStats));
// // var dataResults = JSON.stringify(dataStats);
//   });
});


//created /datastats to display a json of workout not sure if this is useful
//if we replace res.json(dataStats) with res.json(JSON.stringify(dataStats)) it'll be an array
router.get("/datastats", function(req, res) {
  fitness.all(function (dataStats) {
  res.json(dataStats);
});
});
// router.get("/bio", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/biometrics.html"));


// });

router.get("/chart", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/charts.html"));


});

router.post("/biometrics", function (req, res) {
  console.log(req);
  console.log(req.body.weight);
  console.log(req.body.bodyFat);
  console.log(req.body.muscleMass);
  console.log(req.body.bodyWater);
  console.log(req.body.boneMass);
  // console.log(req.body.user);
  //insert in model function
  fitness.insertBiometrics([
    "weight", "body_fat", "muscle_mass", "body_water", "bone_mass"
  ],
    [
      req.body.weight, req.body.bodyFat, req.body.muscleMass, req.body.bodyWater,
      req.body.boneMass
    ], function (biometricResult) {
      console.log(biometricResult);
      res.json({ id: biometricResult.insertId }); //find this from console.log
    }

  );

});


router.post("/datastats", function (req, res) {
  console.log(req);
  console.log(req.body.catagory);
  console.log(req.body.weight);
  console.log(req.body.reps);

  //insert in model function
  fitness.insertWorkoutdata([
    "exercise", "exercise_weight", "reps"
  ],
    [
      req.body.catagory, req.body.weight, req.body.reps
    ], function (dataResult) {
      console.log(dataResult);
      res.json({ id: dataResult.insertId }); //find this from console.log
    }

  );

});

// router.get("/excer", function (req, res) {

//   fitness.all(function(dataStats) {
//     console.log(dataStats)
//     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//     // res.render("index", { burger_data: burgerData });
//   });
// });













// Export routes for server.js to use.
module.exports = router;
