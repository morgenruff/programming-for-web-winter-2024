const squareWidth = 50;
const squareHeight = 50;
let squareXPosition = 100;
let squareYPosition = 0;

function setup () {
	createCanvas(500, 500);
}

function draw () {
	background(0);
	fill('purple');
	// ellipse(100, 100, 100);
	rect(squareXPosition, squareYPosition, squareWidth, squareHeight);
	squareYPosition += 1;
	if (squareYPosition > height) {
		noLoop();
	}
}

function mousePressed () {
	console.log(mouseX, mouseY);
	// let distance = dist(mouseX, mouseY, 100, 100);
	// console.log(distance);
	// if(distance < 50) {
	// 	alert('you hit it');
	// }
	if((mouseX >= squareXPosition && mouseX <= squareXPosition + squareWidth) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeight)) {
		console.log('you have got the x');
	}
}

