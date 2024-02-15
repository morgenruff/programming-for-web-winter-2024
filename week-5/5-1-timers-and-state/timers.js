let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 50;
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
	keyToNumber = map(keyToNumber, 1, 9, 1, 255); // range of 1-9 keyboard keys; grayscale color from 1-255 value depending on key typed
	console.log('converted number', keyToNumber);
	blockColor = keyToNumber; // 
}

window.setTimeout (() => { // runs once at the start
	drawTimer = window.setInterval(() => { // empty operator (), anonymous function ES6 style (fat arrow), interval in ms
		console.log('interval timer going crazy');
		if ((blockY - 50) <= height) {
			drawBlock(blockX, blockY, blockColor);
			blockY += distance; // add distance (20px) to current blockY position, creating vertical movement
		} else {
			blockY = 0;
			blockX += 50;
		}
		if (((blockY - 50) > height) && ((blockX - 50) > width)) {
			// cancels interval timer once the block reaches past the edge of the canvas
			window.clearInterval(drawTimer);
			alert('done'); // window alert at completion
		}
	}, speed); // speed of block movement as declared globally, can be dynamically updated

}, 1500);
