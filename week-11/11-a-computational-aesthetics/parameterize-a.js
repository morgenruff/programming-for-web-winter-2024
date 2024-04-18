let colors = [
  '#E6AF2E',
  '#E0E2DB',
  '#3D348B',
  '#9B6A6C'
];
function setup() {
  createCanvas(1000, 1000)
}
function bigEll(x, y, width, fillColor, strokeColor) {
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(4);
  ellipse(x, y, width);
}
function littleEll(x, y, width, fillColor, strokeColor) {
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(2);
  ellipse(x, y, width);
}
function bez(x1, y1, x2, y2, x3, y3, x4, y4, z1, z2, z3, z4, strokeColor) {
  noFill();
  stroke(strokeColor);
  strokeWeight(random(2, 4));
  bezier(x1, y1, x2, y2, x3, y3, x4, y4, z1, z2, z3, z4);
}
function mouseReleased() {
  loop();
}
function mousePressed() {
  noLoop();
}
function draw() {
  frameRate(random(8, 12));
  background('#191716');
  bigEll(random(100, 900), random(100, 900), 150, random(colors), random(colors));
  littleEll(random(100, 900), random(100, 900), 75, random(colors), random(colors));
  bez(random(100, 900), random(100, 900), random(100, 900), random(100, 900), random(100, 900), random(100, 900), random(100, 900), random(100, 900), random(1, 4), random(1, 4), random(1, 4), random(1, 4), random(colors));
  // noLoop();
}