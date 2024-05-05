let mlmm;
let mlannmean;
let mlgrow;
let glmm;
let glannmean;
let dec, avg, trend, days;
let r, g, b, a;
let data;
const padding = 10; // grid border padding
const cellSize = 10; // grid cell size
const canvasWidth = 1000;
const canvasHeight = 750;
const canvasColor = '#2e382e';
const rows = (canvasHeight / cellSize) - 2;
const columns = (canvasWidth - (padding * 2)) / cellSize;
const cellCount = rows * columns;
const colors = [
  '#000000', // 0
  '#ffe500', // 1
  '#4e7fc9', // 2
  '#547bc3', // 3
  '#5a77bc', // 4
  '#5f74b6', // 5
  '#6570af', // 6
  '#6b6ca9', // 7
  '#7168a3', // 8
  '#76649c', // 9
  '#7c6096', // 10
  '#825d90', // 11
  '#885989', // 12
  '#8d5583', // 13
  '#93517c', // 14
  '#994d76', // 15
  '#9f4970', // 16
  '#a44669', // 17
  '#aa4263', // 18
  '#b03e5d', // 19
  '#b63a56', // 20
  '#bb3650', // 21
  '#c13249', // 22
  '#c72f43', // 23
  '#cd2b3d', // 24
  '#d22736', // 25
  '#d82330', // 26
  '#de1f2a', // 27
  '#e41b23', // 28
  '#e9181d', // 29
  '#ef1416', // 30
  '#f51010', // 31
];
let cells = new Array(cellCount).fill(0); // fill color array
cells[0] = 1; // colors the 0 position cell the 1 value from the color array
function preload() {
  mlmm = loadJSON('../assets/climate-data/co2/co2-mm-mlo.json');
  mlannmean = loadJSON('../assets/climate-data/co2/co2-annmean-mlo.json');
}
function renderCells() {
  let left = padding;
  let top = padding;
  let end = left + columns * cellSize;
  for (let i = 0; i < cells.length; i++) {
    noStroke();
    fill(colors[cells[i]]);
    let size = cellSize - 2;
    rect(left, top, size, size, 0);
    left += cellSize;
    if (left === end) {
      left = padding;
      top += cellSize;
    }
  }
}
function cellIndex(x, y) {
  return (y * columns) + x;
}
console.log(cellIndex(97, 0));
function setup() {
  console.log(cellCount, colors, cells); // check cell count
  createCanvas(canvasWidth, canvasHeight); // canvas at 1000 * 750
  background(canvasColor);
  // for (let i = 0; i < 100; i++) { // colors a particular cell the array color at position 1
  //   cells[cellIndex(i, i)] = 1;
  // }
  renderCells();
  mlmm = Object.values(mlmm); // turn mlmm JSON into values
}
function draw() {
  frameRate(3);
  // loop through mlmm JSON data
  for (let i = 0; i <= mlmm.length; i++) {
      dec = mlmm[i].decimaldate; // decimal date value into a variable
      avg = mlmm[i].average; // average value into a variable
      trend = mlmm[i].trend; // trend value into a variable
      days = mlmm[i].numdays; // number of days value into a variable
      // data = map(cellIndex[i, i], cellIndex.x, cellIndex.y, ); // map each cell to a decimal date

      translate(10, 0);
      push();
        console.log(dec, avg, trend, days);
        stroke(random(0, 255));
        strokeWeight(15);
        point(random(100, 900), random(100, 600), i);

  }
}