let i1, i2, i3, i4;
let p1, p2, p3;
let pieces = [];
let catcher;
let frogPos;
let state = 0;
let timer =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  i1 = loadImage("assets/menu.jpg");
  i2 = loadImage("assets/play.jpg");
  i3 = loadImage("assets/lose.jpg");
  i4 = loadImage("assets/win.jpg");
 
  p1 = loadImage("assets/bottle.png");
  p2 = loadImage("assets/can.png");
  p3= loadImage("assets/worm.png");

  catcher = loadImage("assets/fish.png");

   // Spawn objects
  for (let i = 0; i < 10; i++) {
    pieces.push(new Piece());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
 
  switch(state) {
    case 0:// menu screen
      background(i1);
      fill("green")
      textSize(16)
      text("Click to play", width/2 - 40, height/2 + 190);
      fill("green")
      textSize(17)
      text("This game reflects the difficulties fishes encounter \n                feeding in a plastic littered ocean.", width/2 - 180, height/2 + 35);
      break;
      
      case 1:// game screen
      game();
      timer ++ ;
      if (timer> 5*60){
        timer = 0;
        state = 3;
      }
        break;
      
      case 2:// win screen
        background(i4);
      break;
      
      case 3:// lose screen
        background(i3);
        textSize(17)
      text("A 100,000 marine animals die annualy from getting \n                    entangled in plastics.", width/2 - 180, height/2 + 35);
     
      break;
} 
}

function mouseReleased(){
  switch(state){
    case 0:// go to game
      state = 1;
      break;
      
   case 2: // win state
      resetTheGame();
      state = 0;
      break;
      
      case 3: // win state
      resetTheGame();
      state = 0;
      break;
      
  }
  }
  



function game() {
  background(i2);

  // operate on every car
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].display();
    pieces[i].move();

    //collision detection
    if (pieces[i].pos.dist(frogPos) < 30) {
      pieces.splice(i, 1);
    }
  }

  if (pieces.length <=0) {
    timer = 0;
    state = 2;
  }
  
  // add a "frog"
  fill("green");
  image(catcher, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}


function resetTheGame(){
  piece = [];
  for (let i = 0; i < 10; i++) {
    pieces.push(new Piece());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}
class Piece {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(0, random(3));
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    // this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
     image(p1,this.pos.x, this.pos.y);
     image(p2,this.pos.x, this.pos.y);
     image(p3,this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
