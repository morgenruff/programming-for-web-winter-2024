// Create a p5.js project
// Create a function that draws a square in a specific location. The fill color and the location should be function parameters.
// Instead of using the draw function to draw your block, create a setInterval
// Each interval, draw your block increase either the X or the Y
// When the block goes out of bounds, reset whichever axis went out of bounds back to 0 and move the other axis coordinate over the length or width of your block. It should be like starting a new row or column.
// When the block is beyond both the width and the height, clear your interval.
// Experiment with keyTyped or keyPressed to change the color of your block as it goes.


let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 75;
const distance = 50;

function setup() {
	createCanvas(500, 500);
	background(0);
}

function drawBlock(x, y, color) { // draw block shape
	fill(color || 255); // short-circuit condition - if no color, 255
	rect(blockX, blockY, 50, 50);
}

function keyTyped() { // user key press function
	let keyToNumber = Number(key);
	if (isNaN(keyToNumber)) { // if key typed is not a number, continue (basically ignore)
		return;
	}
	keyToNumber = map(keyToNumber, 1, 9, 1, 255); // range of 1-9 keyboard keys; grayscale color from 1-255 value depending on key typed, increasing in luminance as the numbers go up (1 is black, 9 is white)
	console.log('converted number', keyToNumber);
	blockColor = keyToNumber; // change block color according to number typed
}

window.setTimeout (() => { // runs only once at the start
	drawTimer = window.setInterval(() => { // empty operator (), anonymous function ES6 style (fat arrow), interval in ms
		console.log('interval timer going crazy');
		if ((blockY + 50) <= height) {
			drawBlock(blockX, blockY, blockColor);
			blockY += distance; // add distance (20px) to current blockY position, creating vertical movement
		} else {
			blockY = 0;
			blockX += 50;
		}
		if (((blockY + 50) > height) && ((blockX + 50) > width)) {
			// cancels interval timer once the block reaches past the edge of the canvas
			window.clearInterval(drawTimer);
			alert('done'); // window alert at completion
		}
	}, speed); // speed of block movement as declared globally, can be dynamically updated

}, 1500); // ms timeout delay at start
