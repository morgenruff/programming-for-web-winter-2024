// Start a new p5.js project.
// Create a simple outline shape.
// Convert it to a class.
// In the constructor, set the shape's x and y coordinates as class properties (a variable that is specific to the class).
// Create a method (a class-specific function)  that renders the shape with the class properties (probably something like this.x andn this.y—you may also want to use class properties with width and height). 
// Create a method that gives the shape some sort of movement.
// Use a for loop in the draw function to draw a number of instances of your class on the canvas.

let rectangle;

function setup() {
	createCanvas(800,800);
	background(128);
}

class Rectangle {
	constructor(x, y, w, h, tl, tr, br, bl) { // x, y, width, height, radius values
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.tl = tl;
		this.tr = tr;
		this.br = br;
		this.bl = bl;
	}
	morph() { // random 1-10 changes to all values
		this.x = this.x * random(1,10);
		this.y = this.y * random(1,10);
		this.w = this.w * random(1,10);
		this.h = this.h * random(1,10);
		this.tl = this.tl * random(1,10);
		this.tr = this.tr * random(1,10);
		this.br = this.br * random(1,10);
		this.bl = this.bl * random(1,10);
	}
	show() {
		stroke(random(1, 255));
		strokeWeight(random(10, 20));
		noFill();
		rect(this.x, this.y, this.w, this.h, this.tl, this.tr, this.br, this.bl);
	}
}

function draw() {
	for(let i = 0; i < 1; i++) { // add rects at a reasonable pace
		rectangle = new Rectangle(random(0,750), random(0,750), random(10,50), random(10,50), random(0,20), random(10,20), random(10,20), random(10,20));
		rectangle.show([i]);
		rectangle.morph([i]);
	}
	
}

