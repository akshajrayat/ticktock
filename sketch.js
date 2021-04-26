var hr,min,sec;
var hrangle,minangle,secangle;
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255); 
  hr = hour(); 
  min = minute();
  sec = second();

  angleMode(DEGREES);
 hrangle=map(hr%12,0,12,0,360);
 minangle=map(min,0,60,0,360);
 secangle=map(sec,0,60,0,360);
push();
rotate (hrangle)
 stroke(255,0,0)
 strokeWeight(7)
 line (400,400,100,0)
 pop ();
 push();
 rotate(minangle)
 stroke(0,255,0)
 strokeWeight(7)
 line(400,400,100,0)
 pop ();
 push();
 rotate(secangle)
 stroke(0,0,255)
 strokeWeight(7)
 line(400,400,100,100)
 pop ();
  drawSprites();
}