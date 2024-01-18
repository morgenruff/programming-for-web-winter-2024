// function setup() {
// 	createCanvas(480, 120);
// }

// function draw() {
// 	background(204);
// 	ellipse(140, 0, 190, 190);
// 	rect(160, 30, 260, 20);
// }

// function draw() {
// 	background(204);
// 	arc(90, 60, 80, 80, 0, 90);
// 	arc(190, 60, 80, 80, 0, 270);
// 	arc(290, 60, 80, 80, 180, 450);
// 	arc(390, 60, 80, 80, 45, 225);
// }

// function draw() {
// 	background(204);
// 	strokeJoin(ROUND);
// 	rect(40, 25, 70, 70);
// 	strokeJoin(BEVEL);
// 	rect(140, 25, 70, 70);
// 	strokeCap(SQUARE);
// 	line(270, 25, 340, 95);
// 	strokeCap(ROUND);
// 	line(350, 25, 420, 95);
// }

// function draw() { background(0);
// 	fill(204);
// 	ellipse(132, 82, 200, 200);
// 	fill(153);
// 	ellipse(228, -16, 200, 200);
// 	fill(102);
// 	ellipse(268, 118, 200, 200);
// }
//
// function setup() {
// 	createCanvas(480, 120);
// 	noStroke();
// }
// function draw() {
// 	background(0, 26, 51);
// 	fill(255, 0, 0);
// 	ellipse(132, 82, 200, 200);
// 	fill(0, 255, 0);
// 	ellipse(228, -16, 200, 200);
// 	fill(0, 0, 255);
// 	ellipse(268, 118, 200, 200);
// }

// function setup() {
// 	createCanvas(480, 120);
// }
// function draw() {
// 	background(204);
// 	beginShape();
// 	vertex(180, 82);
// 	vertex(207, 36);
// 	vertex(214, 63);
// 	vertex(407, 11);
// 	vertex(412, 30);
// 	vertex(219, 82);
// 	vertex(226, 109);
// 	endShape(CLOSE);
// }

// function draw() {
// 	background(204);
// 	// Left creature
// 	fill(255);
// 	beginShape();
// 	vertex(50, 120);
// 	vertex(100, 90);
// 	vertex(110, 60);
// 	vertex(80, 20);
// 	vertex(210, 60);
// 	vertex(160, 80);
// 	vertex(200, 90);
// 	vertex(140, 100);
// 	vertex(130, 120);
// 	endShape(CLOSE);
// 	fill(0);
// 	ellipse(155, 60, 8, 8);
// 	// Right creature
// 	fill(255);
// 	beginShape();
// 	vertex(370, 120);
// 	vertex(360, 90);
// 	vertex(290, 80);
// 	vertex(340, 70);
// 	vertex(280, 50);
// 	vertex(420, 10);
// 	vertex(390, 50);
// 	vertex(410, 90);
// 	vertex(460, 120);
// 	endShape();
// 	fill(0);
// 	ellipse(345, 50, 10, 10);
// }

function setup() {
	createCanvas(720, 480);
	strokeWeight(2);
	ellipseMode(RADIUS);
}

function draw() {
	background(204);
	// neck
	stroke(102);
	line(266, 257, 266, 162);
	line(276, 257, 276, 162);
	line(286, 257, 286, 162);

	// antennae
	line(276, 155, 246, 112);
	line(276, 155, 306, 56);
	line(276, 155, 342, 170);

	// body
	noStroke();
	fill(102);
	ellipse(264, 377, 33, 33);
	fill(0);
	rect(219, 257, 90, 120);
	fill(102);
	rect(219, 274, 90, 6);

	//head
	fill(0);
	ellipse(276, 155, 45, 45);
	fill(255);
	ellipse(288, 150, 14, 14);
	fill(0);
	ellipse(288, 150, 3, 3);
	fill(153);
	ellipse(263, 148, 5, 5);
	ellipse(296, 130, 4, 4);
	ellipse(305, 162, 3, 3);
}