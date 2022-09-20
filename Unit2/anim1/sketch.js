
let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("blue");
  fill("pink")
  textSize(120);
 text("Hi Fam!", x, 200);
 x = x + 5;
 if (x > width){
  x = -500;
 }
}
