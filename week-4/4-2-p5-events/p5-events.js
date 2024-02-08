// Create a new p5.js project.  In the setup function, create a 500 x 500 canvas. 
// In the draw function, create a shape (square or ellipse) and use one of the 
// methods described in either the p5.js example or the reading from the project 
// to determine if the user has clicked on the shape. Use this event handler to 
// increment a variable.
// 
// After you have that working, create a variable to be used for either the 
//shapes x or y. Increment this in the draw function so the shape appears to 
// be moving. This should still detecting mouse clicks.
// 
// After you have this working, create a conditional in your draw function to 
// detect if the shape is off the canvas. When this occurs, call 'noLoop' to 
// stop the draw function from repeating. Display the number of clicks the 
//user has done.
// 
// Feel free to make this interesting with adding color and description text.

// declare variables
let rectX = 0;
let rectWidth;
let rectY;
let rectHeight;
let clickCount = 0;
let speed;
const score = document.createElement(['p']); // create <p> element with score
const scorediv = document.querySelector('#scorediv'); // select #scorediv id

// create 500x500 canvas
function setup() {
	createCanvas(windowWidth, (windowHeight - 120)); // make canvas window width & height
	rectWidth = random(50, 100); // random width btw 50-100px
	rectHeight = random(50, 100); // same as above
	rectY = random(height - rectHeight); // random height & make sure it doesn't appear above the canvas
	speed = random(1, 3); // random speed
}

// create draw function
// determine if user has clicked on the shape via and event handler
function draw() {
	background('rgb(12, 124, 89)'); // bg color
	drawShape(); // draw actual rectangle
	rectX += speed; // iterate across canvas by speed (random)
	score.innerHTML = 'current score: ' + clickCount; // inject score counter into HTML
	scorediv.appendChild(score); // move score counter into #scorediv
	scorediv.style.color = 'rgb(186, 193, 184)'; // style score counter
	if(rectX > width) { // once rect goes off screen, stop animation and print text
		noLoop();
		textSize(36); // big text
		color('rgb(186, 193, 184)');
		if(clickCount === 0) {
			text('do you have a reason for not playing? at least try!', 60, 80) // if no clicks, chide user
		} else {
		text('your score was ' + clickCount + '. great job!', 60, 80); // give final score
		}
		text('you were playing at a speed of ' + speed + ' out of 3.', 60, 120); // list speed of the game
		if(speed <= 1.99) {
			text('that\'s relatively slow!', 60, 160); // conditional text if speed was slow
		} else {
			text('that\'s pretty fast!', 60, 160); // conditional text if speed was fast
		}
		text('the rectangle moved at ' + rectY + ' pixels on the y axis.', 60, 200); // provide y axis position of the rectangle's top
		text('the black marks left and right indicate where its top traveled.', 60, 240); // explainer text for y axis position
		stroke('black');
		strokeWeight(10);
		strokeCap(SQUARE);
		line(0, rectY, 50, rectY);
		line(windowWidth - 50, rectY, windowWidth, rectY);
	}
}

// function for mouse clicks - hoisted
function mousePressed() {
	if((mouseX >= rectX && mouseX <= (rectX + rectWidth)) // mouse x axis position clicks
			&& 
		(mouseY >= rectY && mouseY <= (rectY + rectHeight))) { // mouse y axis position clicks
		clickCount++; // for each click, increase count by 1
		
		console.log('hit', clickCount); // console log rectangle hits + hit count
	}
}

// function to create shape - hoisted
function drawShape() {
	fill('rgb(88, 164, 176)'); // fill rectangle
	stroke(5); // stroke rectangle
	rect(rectX, rectY, rectWidth, rectHeight); // draw randomly shaped rectangle
}
