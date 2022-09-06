function setup(){
  var canvas = createCanvas(100, 100);
  canvas.parent('cd');
}

function draw(){
  background(235,237,243);
  noStroke();
  fill(0);
  text(weather.weather[0].description, 10, 10);
}