var wdth = 400;
var hght = 400;
var mass = 1;

var x = 200;
var y = 200;
var value = 0;
var elsize = 50;

var enemyX = 100;
var enemyY = 100;

function draw() {
	ellipseMode(CENTER);
	if (keyIsDown(LEFT_ARROW) && x > elsize / 2)
		x-=5;
	if (keyIsDown(RIGHT_ARROW) &&  x < wdth - elsize / 2)
		x+=5;
	if (keyIsDown(UP_ARROW) && y > elsize / 2)
		y-=5;
	if (keyIsDown(DOWN_ARROW) && y < hght - elsize / 2)
		y+=5;

	background(153, 255, 153);
	fill(value);
	ellipse(x, y, 50 * mass);
	fill(237, 124, 125);
	ellipse(enemyX, enemyY, 30);
}

function setup() {
	createCanvas(wdth, hght);
}
