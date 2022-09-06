let weather;

function setup() {
}

function draw() {
}

function getData(city) {
  var keyAPI = "f09b68e6f6ece1190372b7564f8a88e5"; 
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="  + city + "&units=metric" + "&appid=" +   keyAPI;
  loadJSON(weatherURL,weatherData); 
}

function weatherData(data){
  weather = "";
  if (data){
    weather = data;
    console.log(weather);
    document.getElementById("temp").innerHTML = str(weather.main.temp) + "°";
    document.getElementById("humidity").innerHTML = str(weather.main.humidity) + "%";
    //document.getElementById("wind").innerHTML = "wind: " + str(weather.wind.speed) + "m/s";
    //document.getElementById("sunrise").innerHTML = "sunrise: " + timeConverter(weather.sys.sunrise);
    //document.getElementById("sunset").innerHTML = "sunset: " + timeConverter(weather.sys.sunset);
    //document.getElementById("weather").innerHTML = "weather: " + weather.weather[0].description;
    document.getElementById("city").innerHTML = weather.name;
    //document.getElementById("pressure").innerHTML = "pressure: " + str(weather.main.pressure) + "hPa";
    //document.getElementById("clouds").innerHTML = "clouds: " + str(weather.clouds.all) + "%";
    document.getElementById("img").src = "https://www.mapquestapi.com/staticmap/v5/map?key=LFS3ZEtERxJq1467AIerQ7ibjtZ7MGHH&center="+weather.coord.lat+","+weather.coord.lon+"&zoom=5&type=sat&size=300,300&shape=radius:30km|"+weather.coord.lat+","+weather.coord.lon;
  }
}
  
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = hour + ':' + min;
  return time;
}

function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  getData(inputVal);
  print(inputVal);
  for (var i = 0; i < 1000; i++){
    if(weather == "" ){
      document.getElementById("city").innerHTML = "Loading...";
    }
    weatherData();
  }
  if(weather == ""){
    document.getElementById("city").innerHTML = "City not found";
  }
  
}