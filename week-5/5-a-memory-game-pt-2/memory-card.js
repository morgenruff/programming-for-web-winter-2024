let pink = '#FFEAEE';
let brown = '#54433B';
let blue = '#0075F2';

function setup() {
	createCanvas(332, 200);
}

function draw() {
	background(brown);
	strokeWeight(1);
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
