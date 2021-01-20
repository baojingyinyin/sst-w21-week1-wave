//SST Lecture 1 Sine Wave
let xspacing;// = 50; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0

let period;// = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave


let amplitude;// = 75.0; // Height of wave
let circleSize;


function setup() {
  createCanvas(600, 400);
  w = width + 16;
  amplitude=createSlider(0,100,75);
  amplitude.position(10,10);
  amplitude.style('width', '80px');
  // amplitude.style('opacity', '1');
  
  
  xspacing=createSlider(0,400,15);
  xspacing.position(180,10);
  xspacing.style('width', '80px');
  
  // circleSize=createSlider(1,20,5);
  // circleSize.position(200,10);
  // circleSize.style('width', '80px');
  
  period=createSlider(0,1000,500);
  period.position(350,10);
  period.style('width', '160px');
    
  
  // dx = (TWO_PI / period.value()) * xspacing.value();
  yvalues = new Array(floor(w / xspacing.value()));
  

}

function draw() {
  dx = (TWO_PI / period.value()) * xspacing.value();
  background(0);
  text('amplitude', 100, 22);
  text('wavelength', 270, 22);
  // text('particle size', 380, 22);
  text('period', 520, 22);

  calcWave();
  renderWave();
  
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude.value();
    x += dx;
  }
  
}



function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing.value(), height / 2 + yvalues[x], 10,10);
  }
}



