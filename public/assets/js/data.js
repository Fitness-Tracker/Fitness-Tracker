// Create new registered User
console.log("data.js loaded");

// Enter Workout Data
$().ready(function () {
    $("#submit").on("click", function (event) {
        console.log("On click registered to submit workout data");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var workoutRecord = {
            userid: 1,   // Logged in UserID
            date: $("#workoutdate").val().trim(),
            exercise: $("#sel1").val().trim(),
            weight: $("#load").val().trim(),
            reps: $("#Repetitions").val().trim()
        };
        console.log(workoutRecord);
        // Send the POST request.
        $.ajax("/workoutdata", {
            type: "POST",
            data: workoutRecord
        }).then(
            function () {
                console.log("Workout record added.");
            }
            );
    });
})
