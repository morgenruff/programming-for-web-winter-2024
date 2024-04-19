let colors = [
  '#82816D',
  '#9AEF1A',
  '#414066',
  '#1B2D2A',
]
function setup() {
  createCanvas(1000, 1000)
}
function dots(x, y, color, width) {
  stroke(color)
  strokeWeight(width)
  point(x, y)
}
function draw() {
  frameRate(5)
  background(colors[3])
  for (let i = 0; i <= 990; i += 10) {
    for (let j = 0; j <= 990; j += 10) {
      dots(i + random(10, 12), j + random(10, 12), random(colors), random(1.618, 3.326))
      dots(i + random(11, 13), j + random(11, 13), random(colors), random(1.618, 3.326))
      dots(i + random(9, 15), j + random(9, 15), random(colors), random(1.618, 3.326))
    }
  }
  // noLoop()
}