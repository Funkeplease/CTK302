let state = 0;
let timer = 0;
let x = 0;
let v = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background("white");
  
 fill("yellow");
  rect(width/2, height/2, 200, 600);
  
  switch (state) {
    case 0:// green light
      fill("grey")
      ellipse (width/2, height/2 -170, 150, 150);
      ellipse (width/2, height/2, 150, 150);
      fill ("green")
       ellipse (width/2, height/2 + 170, 150, 150);
      v = 10;
      break;

    case 1: // yellow light
      fill("grey")
      ellipse (width/2, height/2 -170, 150, 150);
      fill("yellow")
      ellipse (width/2, height/2, 150, 150);
      fill("grey")
       ellipse (width/2, height/2 + 170, 150, 150);
      v = 4;
      break;

    case 2:// red light
      fill("red")
      ellipse (width/2, height/2 -170, 150, 150);
      fill("grey")
      ellipse (width/2, height/2, 150, 150);
      fill("grey")
       ellipse (width/2, height/2 + 170, 150, 150);
      if(x>= width/2 && x <= width/2 + v)
      v = 0;
      break;

  }
  
  timer ++;
  if (timer > 3*60){
    timer = 0;
    state++;
    if (state>2) state = 0;
  }
  // rectangle
  fill ("purple")
  rect(x, height-50, 100, 50);
  ellipse(x+10, height-30, 30,30);
  ellipse(x-30, height-30, 30,30);
  x = x+v;
  if (x> width) {
    x =0;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}