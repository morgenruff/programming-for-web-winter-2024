let pink = '#FFEAEE';
let brown = '#54433B';
let blue = '#0075F2';
let myCard;
const DOWN = 'down';
const UP =  'up';
let startX = 50;
let startY = 50;
let cardWidth = 332;
let cardHeight = 200;
let cards = []; // array of cards
const gameState = {
	
};
let cardFaceArray = [];
let cardBack;

function preload() { // occurs before setup()
	cardBack = loadImage('assets/morgen-ruff-card-back-p5js.png'); // load cardback image
	cardFaceArray = [ // load array of cardface images
		loadImage('images/fuller-01.jpeg'),
		loadImage('images/fuller-02.jpeg'),
		loadImage('images/fuller-03.jpeg'),
		loadImage('images/fuller-04.jpeg'),
		loadImage('images/fuller-05.jpeg'),
		loadImage('images/fuller-06.jpeg'),
		loadImage('images/fuller-07.jpeg'),
		loadImage('images/fuller-08.jpeg')
	]
}

function setup() {
	createCanvas(1578, 1050);
	background(blue);
	let selectedFaces = []; // array of visible cardfaces
	for (let z = 0; z < 8; z++) {
		const randomIdx = floor(random(cardFaceArray.length));
		const face = cardFaceArray[randomIdx]; // choose random face from array
		selectedFaces.push(face); // add to selected faces
		selectedFaces.push(face); // ditto
		// remove used cardface
		cardFaceArray.splice(randomIdx, 1);
	};
	selectedFaces = shuffleArray(selectedFaces);
	for (let j = 0; j < 4; j++) { // row
		for (let i = 0; i < 4; i++) { // column
			const faceImage = selectedFaces.pop();
			cards.push(new Card(startX, startY, faceImage)); // push new card instance to array
			startX += 382;
		}
		startY += 250;
		startX = 50;
	}
}

function mousePressed() {
	for (let k = 0; k < cards.length; k++) {
		if(cards[k].didHit(mouseX, mouseY)) {
			console.log('flipped', cards[k]);
		}
	}
}

class Card {
	constructor (x, y, cardFaceImage) {
		this.x = x;
		this.y = y;
		this.face = DOWN;
		this.cardFaceImage = cardFaceImage;
		this.show();
	}
	
	show () {
		if (this.face === DOWN) {
			fill('blue');
			rect(this.x, this.y, this.width, this.height, 10);
			image(cardBack, this.x, this.y);
		} else {
			fill('#aaa');
			rect(this.x, this.y, this.width, this.height, 10);
			image(this.cardFaceImage, this.x, this.y)
		}
		
	}
	
	didHit (mouseX, mouseY) {
		if (mouseX >= this.x && mouseX <= this.x + this.width &&
			mouseY >= this.y && mouseY <= this.y + this.height
		) {
			this.flip();
			return true;
		} else {
			return false;
		}
	}
	
	flip () {
		if (this.face === DOWN) {
			this.face = UP;
		} else {
			this.face = DOWN;
		}
		this.show();
	}
}

function shuffleArray (array) {
	let counter = array.length;
	while (counter > 0) {
		// pick random index
		const idx = Math.floor(Math.random() * counter);
		// decrease counter by 1
		counter--;
		//swap last element with it
		const temp = array[counter];
		array[counter] = array[idx];
		array[idx] = temp;
	}
	return array;
}
