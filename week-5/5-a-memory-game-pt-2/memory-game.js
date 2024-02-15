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
	let myCard = new Card();
	myCard.show();
}

// function draw() {
// 	background(blue);
// 	for (let k = 0; k < 4; k++) { // iterate 4x rows
// 		for (let i = 0; i < 4; i++) { // iterate top-of-column rectangles
// 			fill(brown);
// 			stroke(pink);
// 			strokeWeight(1);
// 			rect(startX, startY, cardWidth, cardHeight); // create rectangle
// 			myCard.push({x: startX, y: startY, id: startId}); // add rectangles to array
// 			startX += 382; // move over card width + gutter
// 			startId++; // move card ID up one
// 		}
// 		startY += 250; // move down card height + gutter
// 		startX = 50; // restart row at beginning x position
// 	}
// 	console.log(myCard, 'there are ' + myCard.length + ' cards.'); // console log card coordinates & number
// 	noLoop(); // console goes crazy without this!
// }

// function mousePressed() {
// 	for (let j = 0; j < myCard.length; j++) { // iterate through card array
// 		let distance = dist(mouseX, mouseY, myCard[j].x, myCard[j].y); // define click coordinates
// 		if (((distance >= startX) && (distance <= endX)) && ((distance >= startY) && (distance <= endY))); {
// 			console.log('you clicked card #' + myCard[j].id); // if inside rect + click, console log the click
// 		}
// 	}
// }

class Card {
	constructor () {
		this.x = 50; // property
		this.y = 50;
		this.width = 332;
		this.height = 200;
		this.borderRadius = 10;
	}
	show () { // method, specific to class
		background(brown);
		stroke(pink);
		strokeWeight(1);
		rect(this.x, this.y, this.width, this.height, this.borderRadius);
		stroke(blue); // outer vertical, working inward
		line(316, 17, 316, 183);
		line(16, 17, 16, 183);
		stroke(pink); // outer horizontal
		line(16, 16, 316, 16);
		line(16, 184, 316, 184);
		stroke(blue); // 2nd level vertical
		line(32, 33, 32, 167);
		line(300, 33, 300, 167);
		stroke(pink); // 2nd level horizontal
		line(32, 32, 300, 32);
		line(32, 168, 300, 168);
		stroke(blue); // 3rd level vertical
		line(48, 49, 48, 151);
		line(284, 49, 284, 151);
		stroke(pink); // 3rd level horizontal
		line(48, 48, 284, 48);
		line(48, 152, 284, 152);
		line(49, 92, 283, 92); // inner tight horizontal
		line(49, 108, 283, 108);
		stroke(blue); // diagonals
		line(48, 48, 284, 152);
		line(48, 152, 284, 48);
		fill(brown);
		stroke(pink); // outer circle
		ellipse(166, 100, 80);
		stroke(blue); // 2nd circle
		ellipse(166, 100, 60);
		stroke(pink); // 3rd circle
		ellipse(166, 100, 40);
		stroke(blue); // inner circle
		ellipse(166, 100, 20);
	}
}
