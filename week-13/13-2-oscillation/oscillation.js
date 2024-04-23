let sliderS;
let sliderY;
function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  sliderS = createSlider(0, 100, 30);
  sliderY = createSlider(0, 100, 30);
}
function draw() {
  let s = sliderS.value();
  let y = sliderY.value();
  background(0);
  rotateX(s);
  rotateY(y);
  noFill();
  stroke(random(1, 255));
  strokeWeight(0.1);
  for (let i = 0; i < 600; i++) {
    let r = map(sin(frameCount / 2), -1, 0, 10, 20);
    let g = map(i * 13, 1, 1, 10, 20);
    let b = map(cos(frameCount / 2), -1, 2, 100, 200);
    stroke(r, g, b);
    rotate(frameCount / 250)
    beginShape();
    for (let j = 0; j < 360; j += 100) {
      let rad = i * 2;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 5) * 50;
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}