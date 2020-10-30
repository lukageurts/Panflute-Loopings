let x = 20;
let y = 10;
let stap = 20;
let stop = 420;
let dikte = 10;

function setup() {
  createCanvas(700, 250);
  background(240);
}

function draw() {
  stroke(0);
  strokeWeight(dikte);
  for (let x =20; x <stop; x = x + stap) {
    if (x == 220) {
      stroke( 255, 0, 0);
    } 
    line(x, 60, x, 80);
  }
}