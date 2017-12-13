$(function () {

    // window.onload = function() {
    //     $.ajax("/datastats",{
    //         type: "GET",

    //     });
    // },
// $.ajax({
//     url: "/excer",
//     type: "POST",
//     data: {"data" : "dataResults"}

// });

    // console.log(dataResults);

   
    
        $("#dataEntry").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
    
            var dataStats = {
                catagory: $("#sel1").val().trim(),
                weight: $("#load").val().trim(),
                reps: $("#Repetitions").val().trim()
              
            };
            console.log(dataStats);
            // Send the POST request.
            $.ajax("/datastats", {
                type: "POST",
                data: dataStats
            }).then(
                function (data) {
                    console.log("created new data entry");
                    // Reload the page to get the updated list
                     location.reload();

                }
                );
        });
    
    });