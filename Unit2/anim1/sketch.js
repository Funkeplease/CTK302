
let x = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/hangedletters.ttf")
}

function draw() {
  background("blue");
  fill("pink")
  textFont(f1, 120);
 text("Hi Fam!", x, 200);
 x = x + 5;
 if (x > width){
  x = -500;
 }
}
