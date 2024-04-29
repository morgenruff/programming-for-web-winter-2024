let points = []; // base declaration of empty points variable
let mult; // smoothness
let max; // maximum number of lines going at once
let r;
let g;
let b;
let a;
let c;
let r1; // red 1
let r2; // red 2
let g1; // green 1
let g2; // green 2
let b1; // blue 1
let b2; // blue 2
function setup() {
  createCanvas(windowWidth, windowHeight); // browser window fill
  // random color selections
  r1 = '#b40e17';
  r2 = '#e24249ff';
  g1 = '#58e242ff';
  g2 = '#124a09ff';
  b1 = '#120366ff';
  b2 = '#3d4ddcff';
  mult = random(0.03, 0.2); // random multiplication value
  background(r2);
  angleMode(DEGREES); // degrees for ease of use
  noiseDetail(100); // jaggedness to the animation - higher = more jagged
  let density = 100; // number of points on one axis
  let space = width / density; // area between points
  for (let x = 0; x < width; x += space) { // x-axis
    for (let y = 0; y < height; y += space) { // y-axis
      let p = createVector(x + random(2, 10), y + random(2, 10)); // single point - vector object
      points.push(p); // add point at semi-random coordinate per p variable above
    }
  }
  shuffle(points, true); // shuffle array for randomness

}
function draw() {
  noStroke();
  if(frameCount <= points.length) { // stop drawing if frameCount goes above the number of points
    max = frameCount;
  } else {
    max = points.length;
  }
  for (let i = 0; i < max; i++) { // iterate through until max is reached
    r = map(points[i].x, 0, width, r1, r2); // red
    g = map(points[i].y, 0, width, g1, g2); // green
    b = map(points[i].x, 0, width, b1, b2); // blue
    a = map(dist(width / 2, height / 2, points[i].x, points[i].y, 0, 300, 0, 600)); // alpha
    c = color(r, g, b, a);
    fill(c); // fill with rgb & alpha
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 50, 0, 1080); //
    points[i].add(createVector(cos(angle), sin(angle))); // smooth out drawing
    // restrict to circle with radius under... then draw ellipses
    if(dist(width / 2, height / 2, points[i].x, points[i].y) < 400) { // draw bounding circle width radius
      ellipse(points[i].x, points[i].y, random(0.25, 0.75)); // draw point at random 1px to 3px width
    }
  }
}