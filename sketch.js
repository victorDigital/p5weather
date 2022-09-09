let weather;
let weatherapi3;
function preload() {
  i01d = loadImage('icons/01d.png');
  i01n = loadImage('icons/01n.png');
  i02d = loadImage('icons/02d.png');
  i02n = loadImage('icons/02n.png');
  i03d = loadImage('icons/03d.png');
  i03n = loadImage('icons/03n.png');
  i04d = loadImage('icons/04d.png');
  i04n = loadImage('icons/04n.png');
  i09d = loadImage('icons/09d.png');
  i09n = loadImage('icons/09n.png');
  i10d = loadImage('icons/10d.png');
  i10n = loadImage('icons/10n.png');
  i11d = loadImage('icons/11d.png');
  i11n = loadImage('icons/11n.png');
  i13d = loadImage('icons/13d.png');
  i13n = loadImage('icons/13n.png');
  i50d = loadImage('icons/50d.png');
  i50n = loadImage('icons/50n.png');
}

function setup(){
  var canvas = createCanvas(87, 87);
  canvas.parent('cd');
  getData("London");
}

function draw(){
  background(20, 50, 100);
  if(weather){
    noStroke();
    fill(0);
    switch(weather.weather[0].icon){
      case '01d':
        image(i01d, 0, 0, 87, 87);
        break;
      case '01n':
        image(i01n, 0, 0, 87, 87);
        break;
      case '02d':
        image(i02d, 0, 0, 87, 87);
        break;
      case '02n':
        image(i02n, 0, 0, 87, 87);
        break;
      case '03d':
        image(i03d, 0, 0, 87, 87);
        break;
      case '03n':
        image(i03n, 0, 0, 87, 87);
        break;
      case '04d':
        image(i04d, 0, 0, 87, 87);
        break;
      case '04n':
        image(i04n, 0, 0, 87, 87);
        break;
      case '09d':
        image(i09d, 0, 0, 87, 87);
        break;
      case '09n':
        image(i09n, 0, 0, 87, 87);
        break;
      case '10d':
        image(i10d, 0, 0, 87, 87);
        break;
      case '10n':
        image(i10n, 0, 0, 87, 87);
        break;
      case '11d':
        image(i11d, 0, 0, 87, 87);
        break;
      case '11n':
        image(i11n, 0, 0, 87, 87);
        break;
      case '13d':
        image(i13d, 0, 0, 87, 87);
        break;
      case '13n':
        image(i13n, 0, 0, 87, 87);
        break;
      case '50d':
        image(i50d, 0, 0, 87, 87);
        break;
      case '50n':
        image(i50n, 0, 0, 87, 87);
        break;
    }
  }
}

function getData(city) {
  var keyAPI = "f09b68e6f6ece1190372b7564f8a88e5"; 
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="  + city + "&units=metric" + "&appid=" +   keyAPI;
  loadJSON(weatherURL,weatherData); 
}

function getDataApi3(lon, lat) {
  var keyAPI = "eb3c615f3cef8a8361db61722c4720e1"; 
  //var weatherURL = "api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+keyAPI;
  var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=eb3c615f3cef8a8361db61722c4720e1&units=metric";
  loadJSON(weatherURL,weatherDataApi3); 
}

function weatherData(data){
  weather = "";
  if (data){
    weather = data;
    console.log(weather);
    getDataApi3(weather.coord.lat, weather.coord.lon);
    document.getElementById("temp").innerHTML = str(weather.main.temp) + "°";
    document.getElementById("humidity").innerHTML = str(weather.main.humidity) + "%";
    document.getElementById("wind").innerHTML = str(weather.wind.speed) + "m/s";
    document.getElementById("weather").innerHTML = weather.weather[0].description;
    document.getElementById("city").innerHTML = weather.name+", "+weather.sys.country;
    document.getElementById("pressure").innerHTML = str(weather.main.pressure) + "hPa";
    document.getElementById("clouds").innerHTML = str(weather.clouds.all) + "%";
    document.getElementById("img").src = "https://www.mapquestapi.com/staticmap/v5/map?key=LFS3ZEtERxJq1467AIerQ7ibjtZ7MGHH&center="+weather.coord.lat+","+weather.coord.lon+"&zoom=13&type=sat&size=300,300@2x";
    document.getElementById("img2").src = "https://www.mapquestapi.com/staticmap/v5/map?key=LFS3ZEtERxJq1467AIerQ7ibjtZ7MGHH&center="+weather.coord.lat+","+weather.coord.lon+"&zoom=1&type=sat&size=300,300@2x&shape=radius:8km|"+weather.coord.lat+","+weather.coord.lon;
    document.getElementById("hiddenWhenNoInfo1").style.visibility = "visible";
    document.getElementById("hiddenWhenNoInfo2").style.visibility = "visible";
    document.getElementById("weather").style.visibility = "visible";
  }
}

function weatherDataApi3(dataApi3){
  weatherApi3 = "";
  if (dataApi3){
    weatherApi3 = dataApi3;
    console.log(weatherApi3);
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
    // if no city is found, the list elements is hidden
    document.getElementById("hiddenWhenNoInfo1").style.visibility = "hidden";
    document.getElementById("hiddenWhenNoInfo2").style.visibility = "hidden";
    document.getElementById("weather").style.visibility = "hidden";

  }
  
}