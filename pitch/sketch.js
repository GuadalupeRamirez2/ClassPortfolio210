/*
	final project pitch template
	title
	description
	theme
	interaction
	grapics
*/
var pattern1;
function preload(){
    pattern1 = loadImage('../pattern_v1/patternv1l.png');
}

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;

function setup() {
	createCanvas(960, 640);
}

function draw() {
	background(51);
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		textSize(80);
		fill(255);
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('Day and Night', width/2, height/2 - 50);
		textSize(60);
		text('in New York City', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(45);
		text('My project is a landscape of New York City, I would be using most of the code we viewed threw the semester.', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The user will be able to generate a climate change by clicking on the canvas.', 50, 100, width - 100);
	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('My project "Pattern 1" is a perfect example of some of the code I would be using in my final project.', 50, 100, width - 100);
       
        image(pattern1, 250, 350, 300, 300);
	} else if (currentSlide == 5) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The graphics will also include squares, colors,pattern, etc.', 50, 100, width - 100);
	}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('plum');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('yellow');

		if (mouseIsPressed) {
			stroke('yellow');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('plum');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}