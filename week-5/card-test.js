let pink = '#FFEAEE';
let brown = '#54433B';
let blue = '#0075F2';
let cards = []; // array of cards
let cardFaceArray = [];
let cardBack;
let startX = 50;
let startY = 50;
let cardWidth = 332;
let cardHeight = 200;
const DOWN = 'down';
const UP =  'up';
const gameState = {
	totalPairs: 8, // number of total pairs of cards
	flippedCards: [], // which cards are currently flipped
	numMatched: 0,
	attempts: 0,
	waiting: false
};

function preload() { // occurs before setup() - loads assets
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
	];
}

function setup() {
	createCanvas(1578, 1050);
	let selectedFaces = []; // array of visible/flipped cardfaces
	for (let z = 0; z < 8; z++) {
		const randomIdx = floor(random(cardFaceArray.length)); // choose random card
		const face = cardFaceArray[randomIdx]; // choose random face from array
		selectedFaces.push(face); // add to selected faces
		selectedFaces.push(face); // ditto
		// remove used cardface
		cardFaceArray.splice(randomIdx, 1);
	};
	selectedFaces = shuffleArray(selectedFaces);
	for (let j = 0; j < 4; j++) { // row
		for (let i = 0; i < 4; i++) { // column
			const cardFaceImage = selectedFaces.pop(); // remove the last array item
			cards.push(new Card(startX, startY, cardFaceImage)); // push new card instance to array
			startX += 382;
		}
		startY += 250; // add y value plus card height
		startX = 50; // return x value to start
	}
}

function draw () {
	background(blue);
	if (gameState.numMatched === gameState.totalPairs) { // game won message
		fill('yellow');
		textSize(60);
		text('you win!', 400, 425);
		noLoop();
	}
	for (let k = 0; k < cards.length; k++) {
		if (!cards[k].isMatch) { // if not a match...
			cards[k].face = DOWN; // flip back down
		}
		cards[k].show(); // redraw cardback
	}
	noLoop();
	gameState.flippedCards.length = 0;
	gameState.waiting = false; // grant ability to interact with the board
	fill(255);
	textSize(24);
	text('attemps: ' + gameState.attempts, 100, 100); // number of attempts
	text('matches: ' + gameState.numMatched, 150, 150); // number of matches
}

function mousePressed() {
	if (gameState.waiting) {
		return; // stop function if waiting
	}
	for (let k = 0; k < cards.length; k++) {
		// first, check flipped cards length is 2, then trigger flip when clicked
		if((gameState.flippedCards.length < 2) && (cards[k].didHit(mouseX, mouseY))) {
			console.log('flipped', cards[k]);
			gameState.flippedCards.push(cards[k]); // add clicked card to flipped cards status
		}
	}
	if (gameState.flippedCards.length === 2) { // if flipped cards number = 2
		gameState.attempts++; // increase attempts by 1
		if (gameState.flippedCards[0].cardFaceImage === gameState.flippedCards[1].cardFaceImage) { // if cards match
			gameState.flippedCards[0].isMatch = true; // change boolean for 1st card to true so it doesn't flip back
			gameState.flippedCards[1].isMatch = true; // change boolean for 2nd card to true so it doesn't flip back
			gameState.flippedCards.length = 0; // reset length of flipped cards to 0
			gameState.numMatched++; // add 1 to score
			loop();
		} else {
			gameState.waiting = true; // can't flip more cards while waiting
			const loopTimeout = window.setTimeout(() => { // give time to remember
				loop(); // trigger loop, call draw function
				window.clearTimeout(); // clear timeout
			}, 1000) // time value
		}
	}
}

class Card {
	constructor (x, y, cardFaceImage) {
		this.x = x; // x axis property
		this.y = y; // y axis property
		this.width = cardWidth;
		this.height = cardHeight;
		this.face = DOWN;
		this.cardFaceImage = cardFaceImage; // call image from carFaceArray
		this.isMatch = false;
		this.show(); // display face
	}
	
	show () { // display method
		if (this.face === UP || this.isMatch) { // is the card face up or already matched?
			rect(this.x, this.y, this.width, this.height, 10);
			image(this.cardFaceImage, this.x, this.y)
		} else {
			rect(this.x, this.y, this.width, this.height, 10);
			image(cardBack, this.x, this.y);
		}
		
	}
	
	didHit (mouseX, mouseY) { // hit method
		if (mouseX >= this.x && mouseX <= this.x + this.width &&
			mouseY >= this.y && mouseY <= this.y + this.height
		) {
			this.flip(); // call flip method when clicked
			return true;
		} else {
			return false; // or don't
		}
	}
	
	flip () { // check state method
		if (this.face === DOWN) { // if it's down and clicked, flip it
			this.face = UP;
		} else {
			this.face = DOWN; // if it's not clicked, don't flip it
		}
		this.show();
	}
}

function shuffleArray (array) { // random item from the array, swap with last array item
	let counter = array.length; // current number of cards in the array
	while (counter > 0) {
		// pick random index
		const idx = Math.floor(Math.random() * counter); // not in setup(), so need Math.
		counter--; // decrease counter by 1
		const temp = array[counter]; //swap last element with it
		array[counter] = array[idx];
		array[idx] = temp;
	}
	return array; // completely shuffle array once it's been while looped through
}
