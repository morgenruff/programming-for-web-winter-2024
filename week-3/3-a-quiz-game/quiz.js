// declare variables for later
let questionInput;
let currentQuestion;
let resetButton;
let responseText = '';
let responseColor = '';
let heading;
let paragraph;
let green = 'rgb(19, 255, 163)';
let red = 'rgb(255, 80, 80)';
let correctNum = 0;
let wrongNum = 0;
// let answerText = 'status: you have ' + correctNum + ' correct and ' + wrongNum + ' incorrect so far';

// question array of objects
let quiz = [
	{
		question: 'in mathematical terms, what kind of system is the metric system?',
		answer: 'decimal'
	},
	{
		question: 'by what factor should you multiply or divide a base measurement (e.g. meter) to get its "kilo" or "milli" version?',
		answer: '1000'
	},
	{
		question: 'what late 18th-century historical event is credited as the beginnings of the metric system?',
		answer: 'the french revolution'
	},
	{
		question: 'what is the main unit of measurement for volume within the metric system? (hint: kilo____)',
		answer: 'kilogram'
	},
	{
		question: 'what 5?',
		answer: '5'
	},
	{
		question: 'what 6?',
		answer: '6'
	},
];

// function to cycle through questions
function next() {
	if(quiz.length === 0) { // if all questions have been answered correctly, stop the game
		alert('no more questions left, great job! eventually you got them all correct');
		return;
	}
	const index = Math.ceil(Math.random() * (quiz.length - 1)); // otherwise, calculate a random question from the statements array
	return quiz[index]; // return random question position from array
}

currentQuestion = next(); // run cycle through questions
let message = currentQuestion.question; // ask question in the DOM

// check answer
function checkQuestion() {
	if(currentQuestion.answer === questionInput.value()) { // check match between answer value and input value
		quiz = quiz.filter(quizObj => { // if correct, filter out that question going forward
			return currentQuestion.answer != quizObj.answer; // check all the answers in the array
		});
		correctNum ++;
		responseText = 'correct! nice job'; // right answer - text on screen
		responseColor = green; // text color
	} else {
		wrongNum ++;
		responseText = 'oops, wrong answer! please try another' // wrong answer - text on screen
		responseColor = red; // text color
	}
	currentQuestion = next(); // load next random question
	questionInput.value(''); // empty the input box
	if (currentQuestion) {
		message = currentQuestion.question; // ask the next question
	};
}

// reset game
function reset() {
		
}

// canvas setup
function setup() { // canvas/window
	createCanvas(windowWidth, windowHeight); // 100% vw & vh
	loadFont('assets/MetaAccanthis_regular.ttf', font => { // load custom local font
		textFont(font)
	});
	heading = createElement('h1', ['What do you know about the metric system?']); // create title
	heading.position(50, 50); // h1 position start
	paragraph = createP('note: please enter answers in only lowercase letters'); // intro paragraph
	paragraph.position(50, 95); // intro paragraph position
	// answerP = createP(answerText); // status text
	// answerP.position(50, 120); // status text position
	questionInput = createInput(''); // input box
	questionInput.size(200, 24); // input box w & h
	questionInput.position(60, 240); // input box position start
	submitAnswerButton = createButton('am I correct?'); // submit button with text
	submitAnswerButton.size(120, 24); // submit button w & h
	submitAnswerButton.position(265, 240); // after check, run correct or incorrect response
	submitAnswerButton.mousePressed(checkQuestion); // when mouse clicks submit, run answer check
	resetButton = createButton('start over?!'); // game reset button
	resetButton.size(120, 24); // reset button size
	resetButton.position(390, 240); // reset button position
	resetButton.mousePressed(reset); // reset game
};

// draw
function draw() {
	background(color(0, 55, 55)); // page background color
	fill(green); // question text color
	textSize(20); // question text size
	text(message, 50, 190, 600); // question text message and position start
	textWrap(WORD);
	fill(responseColor); // answer text color
	text(responseText, 50, 295); // answer text message and position start
}
