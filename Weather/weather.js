//When document is ready this function invocked
$(document).ready(function () {

    $("#getLocation").click(function () {
        //When clicking button this function invoked
        return getLocation();

    });


});

var lat;
var lon;
//get current  geo location position
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    return getWeather(lat, lon);
}


//getWeather function
function getWeather(lat, lon) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + "&lon=" + lon + "&units=metric" + "&APPID=a080a0d056f23d5c5ccfebee4a1ca989",

        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var widget = showResults(data)
            $("#display").html(widget);

        }

    });
}
//showResults function
function showResults(data) {
    return '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for ' + data.name + ', ' + data.sys.country + '</h2>' + "<h3 style='padding-left:40px;'><center>Temperature: " + data.main.temp + "&deg;C </center></h3><br>"
}
