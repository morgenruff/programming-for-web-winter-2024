function setup() {
	createCanvas(200, 200);
}

function createTile() {
	translate(0, 0);
	fill('rgb(255, 242, 197)');
	rect(0, 0, 200, 200);
	stroke('rgb(93, 88, 205)');
	strokeWeight(5);
	line(0, 20, 200, 20);
	line(0, 40, 200, 40);
	line(0, 60, 200, 60);
	line(0, 80, 200, 80);
	line(0, 100, 200, 100);
	line(0, 120, 200, 120);
	line(0, 140, 200, 140);
	line(0, 160, 200, 160);
	line(0, 180, 200, 180);
	line(20, 0, 20, 200);
	line(40, 0, 40, 200);
	line(60, 0, 60, 200);
	line(80, 0, 80, 200);
	line(100, 0, 100, 200);
	line(120, 0, 120, 200);
	line(140, 0, 140, 200);
	line(160, 0, 160, 200);
	line(180, 0, 180, 200);
	strokeWeight(5);
	circle(50, 50, 89);
	strokeWeight(4);
	circle(50, 50, 79);
	strokeWeight(3);
	circle(50, 50, 69);
	strokeWeight(2);
	circle(50, 50, 59);
	strokeWeight(5);
	circle(50, 150, 89);
	strokeWeight(4);
	circle(50, 150, 79);
	strokeWeight(3);
	circle(50, 150, 69);
	strokeWeight(2);
	circle(50, 150, 59);
	strokeWeight(5);
	circle(150, 50, 89);
	strokeWeight(4);
	circle(150, 50, 79);
	strokeWeight(3);
	circle(150, 50, 69);
	strokeWeight(2);
	circle(150, 50, 59);
	strokeWeight(5);
	circle(150, 150, 89);
	strokeWeight(4);
	circle(150, 150, 79);
	strokeWeight(3);
	circle(150, 150, 69);
	strokeWeight(2);
	circle(150, 150, 59);
	strokeWeight(5);
	line(0, 0, 200, 200);
	line(0, 200, 200, 0);
	strokeWeight(5);
	circle(100, 100, 139);
	strokeWeight(4);
	circle(100, 100, 129);
	strokeWeight(3);
	circle(100, 100, 119);
	strokeWeight(2);
	circle(100, 100, 109);
	strokeWeight(5);
	fill('rgb(255, 239, 151)');
	rect(75, 75, 50, 50);
}

function draw() {
	createTile();
	noLoop();
}
