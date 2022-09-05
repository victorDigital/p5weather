let weather = {};

function setup() {
  noCanvas();
  getData("søborg")
}

function draw() {
  weatherData();
}

function getData(city) {
  var keyAPI = "APIKEY"; 
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="  + city + "&units=metric" + "&appid=" +   keyAPI;
  loadJSON(weatherURL,weatherData);

}

function weatherData(data){
  if (data){
    weather = data;
    console.log(weather);
    document.getElementById("temp").innerHTML = str(round(weather.main.temp)) + "°";
    document.getElementById("humidity").innerHTML = "humidity: " + str(weather.main.humidity) + "%";
    document.getElementById("wind").innerHTML = "wind: " + str(weather.wind.speed) + "m/s";
    document.getElementById("sunrise").innerHTML = "sunrise: " + timeConverter(weather.sys.sunrise);
    document.getElementById("sunset").innerHTML = "sunset: " + timeConverter(weather.sys.sunset);
    document.getElementById("weather").innerHTML = "weather: " + weather.weather[0].description;
    document.getElementById("city").innerHTML = "city: " + weather.name;
    document.getElementById("pressure").innerHTML = "pressure: " + str(weather.main.pressure) + "hPa";
    document.getElementById("clouds").innerHTML = "clouds: " + str(weather.clouds.all) + "%";

  }
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = hour + ':' + min;
  return time;
}