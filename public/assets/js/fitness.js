$(function () {

    $("#modal-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var biometrics = {
            weight: $("#weight").val().trim(),
            bodyFat: $("#bodyFat").val().trim(),
            muscleMass: $("#muscleMass").val().trim(),
            bodyWater: $("#bodyWater").val().trim(),
            boneMass: $("#boneMass").val().trim()
            // user: $("#user").val().trim(),
            // date: $("#date").val().trim()
        };
        console.log(biometrics);
        // Send the POST request.
        $.ajax("/biometrics", {
            type: "POST",
            data: biometrics
        }).then(
            function () {
                console.log("created new biometrics");
                // Reload the page to get the updated list
                window.location.href = "/excer";
            }
            );
    });

});