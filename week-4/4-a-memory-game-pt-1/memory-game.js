let pink = '#FFEAEE';
let brown = '#54433B';
let blue = '#0075F2';
let myCard = []; // empty array of cards
let cardWidth = 332;
let cardHeight = 200;
let startX = 50;
let startY = 50;
let endX = 332;
let endY = 200;
let startId = 0;

function setup() {
	createCanvas(1578, 1050);
}

function draw() {
	background(blue);
	for (let k = 0; k < 4; k++) { // iterate 4x rows
		for (let i = 0; i < 4; i++) { // iterate top-of-column rectangles
			fill(brown);
			stroke(pink);
			strokeWeight(1);
			rect(startX, startY, cardWidth, cardHeight); // create rectangle
			myCard.push({x: startX, y: startY, id: startId}); // add rectangles to array
			startX += 382; // move over card width + gutter
			startId++; // move card ID up one
		}
		startY += 250; // move down card height + gutter
		startX = 50; // restart row at beginning x position
	}
	console.log(myCard, 'there are ' + myCard.length + ' cards.'); // console log card coordinates & number
	noLoop(); // console goes crazy without this!
}

function mousePressed() {
	for (let j = 0; j < myCard.length; j++) { // iterate through card array
		let distance = dist(mouseX, mouseY, myCard[j].x, myCard[j].y); // define click coordinates
		if ((distance >= myCard[j].x) && (distance <= (myCard[j].x + cardWidth)) && (distance >= myCard[j].y) && (distance <= (myCard[j].y + cardHeight))); {
			console.log('you clicked card #' + myCard[j].id); // if inside rect + click, console log the click
		}
	}
}
