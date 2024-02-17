let pink = '#FFEAEE';
let brown = '#54433B';
let blue = '#0075F2';
let cards = []; // array of cards
let cardFaceArray = [];
let cardBack;
let startX = 25;
let startY = 75;
let cardWidth = 332;
let cardHeight = 200;
const DOWN = 'down';
const UP =  'up';
const gameState = {
	totalPairs: 8, // number of total pairs of cards
	flippedCards: [], // which cards are currently flipped
	numMatched: 0, // start matched number
	attempts: 0, // start attempts number
	waiting: false // waiting base value
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
	createCanvas(1453, 975);
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
			startX += 357;
		}
		startY += 225; // add y value plus card height
		startX = 25; // return x value to start
	}
}

function draw () {
	background(blue); // main bg
	for (let k = 0; k < cards.length; k++) {
		if (!cards[k].isMatch) { // if not a match...
			cards[k].face = DOWN; // flip back down
		}
		cards[k].show(); // redraw cardback
	}
	noLoop();
	gameState.flippedCards.length = 0; // start with 0 flipped cards
	gameState.waiting = false; // grant ability to interact with the board
	fill(pink);
	textSize(24);
	text('attemps: ' + gameState.attempts + ' of 20', 25, 50); // number of attempts
	text('matches: ' + gameState.numMatched + ' of 8', 220, 50); // number of matches
	if (gameState.numMatched === gameState.totalPairs) { // game won message
		fill(pink);
		textSize(24);
		text('you win! nice work!', 425, 50);
		noLoop();
	}
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
		this.width = cardWidth; // card width property
		this.height = cardHeight; // card height property
		this.face = DOWN; // base card status
		this.cardFaceImage = cardFaceImage; // call image from carFaceArray
		this.isMatch = false; // base matching status
		this.show(); // display face
	}
	
	show () { // display method
		if (this.face === UP || this.isMatch) { // is the card face up or already matched?
			rect(this.x, this.y, this.width, this.height, 10); // draw rectangle
			image(this.cardFaceImage, this.x, this.y) // face image inside
		} else {
			rect(this.x, this.y, this.width, this.height, 10); // draw rectangle
			image(cardBack, this.x, this.y); // card back image inside
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
		array[counter] = array[idx]; // 
		array[idx] = temp;
	}
	return array; // completely shuffle array once it's been while looped through
}
