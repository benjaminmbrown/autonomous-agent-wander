
var vehicle;


function setup() {
 createCanvas(640, 360);
 setFrameRate(30);
 vehicle = new Vehicle(width/2, height/2);


}

function draw(){
	background(255);
	var mouse = createVector(mouseX, mouseY);
	var enemy = createVector(width/4, height/4);
	
	fill(127);
	stroke(200);
	strokeWeight(2);
	ellipse(mouse.x,mouse.y, 48,48);
	ellipse(enemy.x,enemy.y, 48,48);

	vehicle.wander();
	vehicle.update();
	vehicle.display();

}
