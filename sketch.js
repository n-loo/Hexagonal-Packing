var spacing = 20;
var x = 0;
var y = 0;
var rt3o2 = 0.8660254037;
var count = 0;
var switc = 2;
var psx;
var psy;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
	fill(255, 0);
	stroke(255);
	strokeWeight(.1);
}

function draw() {
	for (let i = 0; i < 30000; i++) {
		x = count * spacing * rt3o2;
		polygon(x, y, spacing / 2, 73);
		count++;
		if (x > width + spacing) {
			y += spacing * rt3o2 - spacing / 8;
			x = 0;
			count = 0;
	
			if (switc % 2 == 0) {
				x = spacing * rt3o2;
				count += .5
			}
	
			switc++;
		}
	}
}



function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	let choice;
	//beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a + PI / 2) * radius;
		let sy = y + sin(a + PI / 2) * radius;
		//vertex(sx, sy);
		choice = random(1);
		if (choice < 0.25) {
			line(x, y, sx, sy);
		}

		stroke(255);
	}
	endShape(CLOSE);
}