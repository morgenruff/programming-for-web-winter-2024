// declare variables for later
let questionInput; // user input button
let currentQuestion; // displayed question
let resetButton; // reset button
let responseText = ''; // correct or incorrect text display
let responseColor = ''; // correct or incorrect text color
let heading; // main title
let paragraph; // intro paragraph
let green = 'rgb(19, 255, 163)'; // global green
let red = 'rgb(255, 80, 80)'; // global red
let correctNum = 0; // initial count of correct answers
let wrongNum = 0; // initial count of incorrect answers
let attempts = 10; // initial count of attempts remaining

// array of objects - questions & answers
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
		question: 'what is the main unit of measurement for mass within the metric system? (hint: kilo____)',
		answer: 'gram'
	},
	{
		question: 'what metric unit of measurement is the analogue to fahrenheit in the imperial system?',
		answer: 'celsius'
	},
	{
		question: 'which body oversees the metric system? (hint: its acronym is ISU if taking English word order literally)',
		answer: 'international system of units'
	},
];

// function to cycle through questions
function next() {
	if(quiz.length === 0) { // if all questions have been answered correctly, stop the game
		alert('no more questions left, great job! you got them all correct before you ran out of attempts!');
		return;
	}
	if(attempts === 0) { // if out of attempts, stop the game
		alert('sorry but you ran out of attempts, please click ok and reload the page to play again!');
		return;
	}
	const index = Math.ceil(Math.random() * (quiz.length - 1)); // otherwise, calculate a random question from the statements array
	return quiz[index]; // return random question position from array
}

currentQuestion = next(); // run cycle through questions
let message = currentQuestion.question; // ask question in the DOM

// function to check answer and do various things
function checkQuestion() {
	if(currentQuestion.answer === questionInput.value()) { // check match between answer value and input value
		quiz = quiz.filter(quizObj => { // if correct, filter out that question going forward
			return currentQuestion.answer != quizObj.answer; // check all the answers in the array
		});
		correctNum ++; // add 1 to correct tally
		responseText = 'correct! nice job. a new question has loaded above'; // right answer - text on screen
		responseColor = green; // text color
	} else {
		wrongNum ++; // add 1 to incorrect tally
		responseText = 'oops, wrong answer! please try another which, conveniently, has already loaded above' // wrong answer - text on screen
		responseColor = red; // text color
	}
	attempts --; // subtract 1 from attempts total every time a question is answered
	currentQuestion = next(); // load next random question
	questionInput.value(''); // empty the input box
	if (currentQuestion) {
		message = currentQuestion.question; // ask the next question
	};
}

// reset game by reloading the page...
function reset() {
	window.location.reload();	
}

// canvas setup
function setup() { // canvas/window
	createCanvas(windowWidth, windowHeight); // 100% vw & vh
	loadFont('assets/MetaAccanthis_regular.ttf', font => { // load custom local font
		textFont(font)
	});
	heading = createElement('h1', ['Know about the metric system?']); // create title
	heading.position(50, 50); // h1 position start
	paragraph = createP('note: please enter answers in only lowercase letters'); // intro paragraph
	paragraph.position(50, 95); // intro paragraph position
	questionInput = createInput(''); // input box
	questionInput.size(200, 24); // input box w & h
	questionInput.position(60, 270); // input box position start
	submitAnswerButton = createButton('am I correct?'); // submit button with text
	submitAnswerButton.size(120, 24); // submit button w & h
	submitAnswerButton.position(265, 270); // after check, run correct or incorrect response
	submitAnswerButton.mousePressed(checkQuestion); // when mouse clicks submit, run answer check
	resetButton = createButton('reset'); // game reset button
	resetButton.size(120, 24); // reset button size
	resetButton.position(390, 270); // reset button position
	resetButton.mousePressed(reset); // reset game if button clicked
};

// draw the canvas and dynamic elements
function draw() {
	background(color(0, 35, 105));
	fill('rgb(219, 255, 163)');
	textSize(18);
	text('status: you have ' + correctNum + ' correct and ' + wrongNum + ' incorrect so far.', 50, 150); // status update - number of correct and incorrect
	fill('rgb(200, 200, 200)');
	textSize(16);
	text(attempts + ' attempts remain, with ' + quiz.length + ' questions that still need answering (by you). Will you make it all the way through?', 50, 170, 600); // status update - number of attempts and questions remaining
	fill(green);
	textSize(18);
	text('question: ' + message, 50, 230, 600); // question text message and position start
	textWrap(WORD); // wrap line at word for small viewports
	fill(responseColor); // answer text color
	text(responseText, 50, 325, 600); // answer text message and position start
}
