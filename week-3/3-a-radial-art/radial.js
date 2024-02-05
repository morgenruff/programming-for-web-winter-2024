let rotateBy = 5;
function setup() {
	createCanvas(600, 600);
	background(0);
	angleMode(DEGREES); // change from default radians to degrees
}
function makeArm(rotateBy) { // creates initial shape
	let alt = Math.round(rotateBy / 360); // creates differential in shape placement, to be deployed later
	noFill();
	stroke(255);
	strokeWeight(1);
	ellipse(150, 150 + alt, 150 / alt); // draw circle at 150x, 150+fraction-of-5y
}
function draw() {
	translate(300, 300); // center coordinates; start point
	rotate(rotateBy); // can add math operators here to change functionality
	makeArm(rotateBy); // calls shape
	rotateBy += 5; // adds 5 to initial rotateBy variable
}
function mousePressed() { // stops looping on mouse click
	noLoop();
}
