// noinspection SpellCheckingInspection

// loop through JSON data to get single average PPM value - 'avg' by month (number)
// loop through JSON data to get date value (string)
// loop through JSON data to get trend value (number)
// create cells numbered based on each JSON object, simple index (not drilling to key-value pair)
// color cells based on 'avg' value - access color array with an if statement (e.g., if (avg > 390 && avg < 400) color cell)
// run through date values and display in a HUD somewhere next to the grid at the same framerate as the cell drawing
// create slider to adjust framerate
// push button to start
// push button to restart - don't loop by default

let mlmm;
let mlannmean;
let mlgrow;
let glmm;
let glannmean;
let date, avg, trend;
let data;
const padding = 10; // grid border padding
const cellSize = 20; // grid cell size
const canvasWidth = 1000;
const canvasHeight = 750;
const rows = (canvasHeight / cellSize);
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
function cellIndex(x, y) {
  return (y * columns) + x;
}
function preload() {
  mlmm = loadJSON('../assets/climate-data/co2/co2-mm-mlo.json', 'json');
  mlannmean = loadJSON('../assets/climate-data/co2/co2-annmean-mlo.json', 'json');
}
function setup() {
  createCanvas(canvasWidth, canvasHeight); // canvas at 1000 * 750
  background(colors[0]);
  mlmm = Object.values(mlmm); // turn mlmm JSON into values
}

function draw() {
  frameRate(2);
  let left = padding;
  let top = padding;
  let end = left + columns * cellSize;
  let size = cellSize - 2;
  // push();
  // for (let i = 0; i <= cells.length; i++) { // render bg cells
  //   noStroke();
  //   fill(colors[8]);
  //   rect(left, top, size, size);
  //   left += cellSize;
  //   if (left === end) {
  //     left = padding;
  //     top += cellSize;
  //   }
  // }
  // pop();
  for (let j = 0; j <= mlmm.length; j++) { // render data cells
    date = mlmm[j].date; // decimal date value into a variable
    avg = mlmm[j].average; // average value into a variable
    trend = mlmm[j].trend; // trend value into a variable
    if (avg > 0 && avg < 320) {
      fill(colors[2]);
    }
    if (avg >= 320 && avg < 325) {
      fill(colors[3]);
    }
    if (avg >= 325 && avg < 330) {
      fill(colors[4]);
    }
    if (avg >= 330 && avg < 335) {
      fill(colors[5]);
    }
    if (avg >= 335 && avg < 340) {
      fill(colors[6]);
    }
    if (avg >= 340 && avg < 345) {
      fill(colors[7]);
    }
    if (avg >= 345 && avg < 350) {
      fill(colors[8]);
    }
    if (avg >= 350 && avg < 355) {
      fill(colors[9]);
    }
    if (avg >= 360 && avg < 365) {
      fill(colors[10]);
    }
    if (avg >= 365 && avg < 370) {
      fill(colors[11]);
    }
    if (avg >= 370 && avg < 375) {
      fill(colors[12]);
    }
    if (avg >= 375 && avg < 380) {
      fill(colors[13]);
    }
    if (avg >= 380 && avg < 385) {
      fill(colors[14]);
    }
    if (avg >= 385 && avg < 390) {
      fill(colors[15]);
    }
    if (avg >= 390 && avg < 395) {
      fill(colors[16]);
    }
    if (avg >= 395 && avg < 400) {
      fill(colors[17]);
    }
    if (avg >= 400 && avg < 405) {
      fill(colors[18]);
    }
    if (avg >= 405 && avg < 410) {
      fill(colors[19]);
    }
    if (avg >= 410 && avg < 415) {
      fill(colors[20]);
    }
    if (avg >= 415 && avg < 420) {
      fill(colors[21]);
    }
    if (avg >= 420 && avg < 425) {
      fill(colors[22]);
    }
    // if (trend === -1) {
    //   stroke(colors[15]);
    //   strokeWeight(1);
    // }
    // if (trend >= 0 && trend <= 15) {
    //   stroke(colors[18]);
    //   strokeWeight(1);
    // }
    // if (trend > 15 && trend <= 20) {
    //   stroke(colors[21]);
    //   strokeWeight(1);
    // }
    // if (trend > 20 && trend <= 25) {
    //   stroke(colors[24]);
    //   strokeWeight(1);
    // }
    // if (trend > 25 && trend <= 30) {
    //   stroke(colors[27]);
    //   strokeWeight(1);
    // }
    // if (trend > 30) {
    //   stroke(colors[30]);
    //   strokeWeight(1);
    // }
    rect(left, top, size, size);
    left += cellSize;
    if (left === end) {
      left = padding;
      top += cellSize;
    }
  }
}