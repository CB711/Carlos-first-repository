function setup() {
	createCanvas(500, 400);
}

var [xpos, ypos, xspeed, yspeed] = [200, 200, 0, 0];
var [yeet] = [8]

function draw() {

   if (mouseIsPressed) {
    background(0, 0, 255);
  } else {
  background(0, 255, 222)
	}
  	if(mouseIsPressed && mouseX>xpos && mouseX<xpos+50 && mouseY>ypos && mouseY<ypos+50) {
     background(255, 0, 0);
    }
	fill(0);
	text("Carlos", 25, 25);
	text("Mouse", mouseX, mouseY);
	fill(0, 255, 0);
  
  
	rect(xpos, ypos, 50, 50);
  fill(255, 0, 255)
text("Billy", xpos, ypos);
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
  
 
  
} 
  


function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -yeet;
			break;
		case 39:
		case 68:
			xspeed = yeet;
			break;
		case 38:
		case 87:
			yspeed = -yeet;
			break;
		case 40:
		case 83:
			yspeed = yeet;
			break;
      case 16:
      xspeed = 15;
      	break;
      case 16:
      yspeed = 15;
      break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
  }
}
