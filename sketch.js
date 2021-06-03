let angle = 0;

//ellipseMode(RADIUS);
angleMode(DEGREES);

function setup() {
  createCanvas(400,400);

  
}

function draw() {
  background(0);  
  
 

  translate(200,200);


  rotate(angle);

  fill(255,0,0);
  triangle(0,0,100,0,100,100);

  fill(0,255,0);
  triangle(-100,0,-100,-100,0,0);

  fill(0,0,255);
  triangle(0,-100,100,-100,0,0);

  fill(255);
  triangle(0,0,0,100,-100,100);

  

  angle = angle + 500;

}