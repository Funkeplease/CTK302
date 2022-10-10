let state = 0

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
switch(state){
  case 0:
    background("pink");
    text("When french fries meet after a long time, what do they do?", width/2, height/2)
    break;

    case 1:
    background("#62B371");
    text("They ketchup.", width/2, height/2)
    break;
}
}

function mouseReleased(){
  state++ ;
  if (state > 1) {
  state = 0;
}
}
