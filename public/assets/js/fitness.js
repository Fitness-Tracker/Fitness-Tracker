
console.log("fitness.js loaded");
console.log("Ready for button click");
var loggedInUserID;

// Login Existing User
$().ready(function () {
  $("#loginB").on("click", function (event) {
    console.log("On click registered for login existing user");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var existingUser = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim()
    };
    console.log(existingUser);
    // Send the POST request.
    $.ajax("/loginUser", {
      type: "POST",
      data: existingUser
    }).then(
      function (result) {
        console.log("Existing User Login Completed");
        console.log(result);
        sessionStorage.setItem("loggedInUserID",result[0].user_id);
        console.log("loggedInUserID set = " + sessionStorage.getItem("loggedInUserID"));
        $("#myModal").modal();
      });
  });
})

// Create New User
$().ready(function () {
  $("#joinB").on("click", function (event) {
    console.log("On click registered for add new user");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newUser = {
      firstname: $("#firstname").val().trim(),
      lastname: $("#lastname").val().trim(),
      gender: $("#gender").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password2").val().trim()
    };
    console.log(newUser);
    // Send the POST request.
    $.ajax("/newUser", {
      type: "POST",
      data: newUser
    }).then(
      function () {
        console.log("Created new registered user");
        // Reload the page to get the updated list
        // location.reload();
      }
      );
  });
})

// Insert New Biometrics entry for logged in user
$().ready(function () {
  $("#enterData").on("click", function (event) {
    console.log("On click registered for add new biometrics data");
    console.log("loggedInUserID value from biometrics route: "+loggedInUserID);
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var loggedInUserID = sessionStorage.getItem("loggedInUserID");
    var biometrics = {
      userid: loggedInUserID,   // Logged in UserID
      date: $("#date").val().trim(),
      weight: $("#weight").val().trim(),
      bodyFat: $("#bodyFat").val().trim(),
      muscleMass: $("#muscleMass").val().trim(),
      bodyWater: $("#bodyWater").val().trim(),
      boneMass: $("#boneMass").val().trim()
    };
    console.log(biometrics);
    // Send the POST request.
    $.ajax("/biometrics", {
      type: "POST",
      data: biometrics
    }).then(
      function () {
        console.log("Created New Biometrics record");
        // Reload the page to get the updated list
        // window.location.href = "/excer";
      }
      );
  });
});
