// Create new registered User
console.log("data.js loaded");
var weightLabels = [];
var weightValues = [];

// Get Weight Data for Charts
$().ready(function () {
    $("#weightChart").on("click", function (event) {
        console.log("On click registered to render Weight Chart");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var loggedInUserID = sessionStorage.getItem("loggedInUserID");
        var weightData = {
            userid: loggedInUserID,   // Logged in UserID            
        };
        // Send the POST request.
        $.ajax("/weightChartData", {
            type: "POST",
            data: weightData
        }).then(
            function (result) {
                console.log("Weight Data for Charts.");
                // Result is an Array of Objects.  Objects have property of db table column names
                // Loop through the array.
                // Get value of date and weight.
                // Push into a new Array (weightLabels, weightValues)
                // Use the Arrays as the values for charts.
                console.log(result);

                //function to sort result by date so that it is in order for the chart
                function compare(a,b) {
                    if (a.date < b.date)
                      return -1;
                    if (a.date > b.date)
                      return 1;
                    return 0;
                  }
                  
                  result.sort(compare);


                for (var i = 0; i < result.length; i++) {
                    weightLabels.push(result[i].date);
                    weightValues.push(result[i].weight)
                }
                console.log(weightLabels);
                console.log(weightValues);
                // sessionStorage.setItem("chartWeightLabels", weightLabels);
                // sessionStorage.setItem("chartWeightValues", weightValues);

                // var chartWeightLabels = sessionStorage.getItem("chartWeightLabels");
                // var chartWeightValues = sessionStorage.getItem("chartWeightValues");
                // Added lines 41 and 42 to try to stringify then parse the Array data
                // For whatever reason, stringify thinks all the values are 1 value (quotes are only being added at beginning and end of data)  This matches my though that Chart.js is handling the labels and dataset as 1 value.
                // var chartWeightLabelsString = JSON.stringify(chartWeightLabels);
                // var chartWeightLabelsParsed = JSON.parse(chartWeightLabelsString);
                // console.log("chartWeightLabelsString" + chartWeightLabelsString);
                // console.log("chartWeightLabelsParsed" + chartWeightLabelsParsed);
                // $(document).ready(function () {
                    var ctx = document.getElementById('myChart').getContext('2d');
                    var chart = new Chart(ctx, {
                        // The type of chart we want to create
                        type: 'bar',
                        // The data for our dataset
                        data: {
                            labels: weightLabels,
                            datasets: [{
                                label: "My Weight Trend",
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: weightValues,
                            }]
                        },

                        // Configuration options go here
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
                    });
                });


            }
            );
    });
