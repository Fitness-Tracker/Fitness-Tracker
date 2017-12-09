$(function () {

    $(".page2-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var biometrics = {
            weight: $("#weight").val().trim(),
            bodyFat: $("#bf").val().trim(),
            muscleMass: $("#mm").val().trim(),
            bodyWater: $("#bw").val().trim(),
            boneMass: $("#bm").val().trim()
        };
        console.log(biometrics);
        // Send the POST request.
        $.ajax("/api/biometrics", {
            type: "POST",
            data: biometrics
        }).then(
            function () {
                console.log("created new biomeetrics");
                // Reload the page to get the updated list
                res.redirect("/excer");
            }
            );
    });
});