function setup() {
  createCanvas(1000, 1000);
}
function draw() {
  frameRate(random(3,10));
  let fillColors = [
    '#97DFFC',
    '#858AE3',
    '#613DC1',
    '#4E148C',
    '#2C0735',
    '#C5D1EB',
    '#92AFD7',
    '#5A7684',
    '#395B50',
    '#1F2F16'
  ];
  let strokeColors = [
    '#50869b',
    '#3e4288',
    '#5a4a85',
    '#6d4d8f',
    '#8912a6',
    '#445d93',
    '#2a313a',
    '#1c3e4f',
    '#277c61',
    '#538338'
  ]
  let bgc = random(fillColors);
  background(bgc);
  let colorPicker1 = random(fillColors);
  let colorPicker2 = random(strokeColors);
  console.log(colorPicker1, colorPicker2);
  // base drawing
  for (let ellx = 30; ellx <= (width - 30); ellx += 15) {
    for (let elly = 30; elly <= (height - 30); elly += 17) {
      fill(colorPicker1);
      stroke(colorPicker2);
      strokeWeight(1);
      ellipse(ellx, elly, random(5, 20));
    }
  }
}