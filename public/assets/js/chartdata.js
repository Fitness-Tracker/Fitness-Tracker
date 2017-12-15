// Create new registered User
console.log("data.js loaded");

// Enter Workout Data
$().ready(function () {
    $("#weightChart").on("click", function (event) {
        console.log("On click registered to render Weight Chart");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var weightData = {
            userid: 1,   // Logged in UserID            
        };
        // Send the POST request.
        $.ajax("/weightChartData", {
            type: "POST",
            data: weightData
        }).then(
            function () {
                console.log("Weight Data for Charts.");
            }
            );
    });
})
