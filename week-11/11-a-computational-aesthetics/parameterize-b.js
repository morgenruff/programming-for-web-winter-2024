let colors = [
  '#212922',
  '#294936',
  '#3E6259',
  '#5B8266',
  '#AEF6C7',
  '#3D348B',
  '#7678ED',
  '#F5F749',
  '#FF5154',
  '#CCDBDC'
]
function setup() {
  createCanvas(1000, 1000)
}
function basePoint(x, y, weight, color) {
  stroke(color)
  strokeWeight(weight)
  point(x, y)
}
function baseLine(x1, y1, x2, y2, weight, color) {
  stroke(color)
  strokeWeight(weight)
  line(x1, y1, x2, y2)
}
function draw() {
  frameRate(10)
  background(random(colors))
  for (let pointx = 0; pointx < 1050; pointx += 10) {
    for (let pointy = 0; pointy < 1000; pointy += 10) {
      basePoint(pointx + 5, pointy + 5, 12, random(colors))
    }
  }
  for (let linex = 0; linex < 1000; linex += 20) {
    for (let liney = 0; liney < 1000; liney += 20) {
      baseLine(linex + 3, liney + 3, linex + 333, liney + 333, 5, random(colors))
      baseLine(linex + 666, liney + 666, linex + 6, liney + 6, 5, random(colors))
    }
  }
  // noLoop()
}