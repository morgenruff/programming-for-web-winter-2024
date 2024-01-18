function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	  cnv.style('display', 'block');
	  background(86, 117, 213);
	  strokeWeight(15);
}

function draw() {
	if (mouseIsPressed) {
		stroke(86, 117, 113, 128);
		fill(86, 117, 253, 128);
	} else {
		stroke(86, 117, 183);
		fill(86, 117, 213);
	}
	ellipse(mouseX, mouseY, 300, 300);
}
