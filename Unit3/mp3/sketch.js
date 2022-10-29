let i1, i2, i3, i4;
let bottle;
let can;
let worm;
let p1 =[];
let p2 =[];
let p3 =[];
// let pieces = [];
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
 
  bottle = loadImage("assets/bottle.png");
  can = loadImage("assets/can.png");
  worm= loadImage("assets/worm.png");

  catcher = loadImage("assets/fish.png");

   // Spawn objects
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p1.push(new Bottle());
  }
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p2.push(new Can());
  }
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p3.push(new Worm());
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
      if (timer> 20*60){
        timer = 0;
        state = 3;
      }
        break;
      
      case 2:// win screen
        background(i4);
        textSize(17)
        text("but did you know 100 million  marine animals \n                    die annualy from plastic waste alone.", width/2 - 180, height/2 + 35);

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
  for (let i = 0; i < p1.length; i++) {
    // pieces[i].display();
    // pieces[i].move();

    p1[i].display();
    p1[i].move();

    //collision detection
    // if (pieces[i].pos.dist(frogPos) < 30) {
    //   pieces.splice(i, 1);
    // }
    if (p1[i].pos.dist(frogPos) < 30) {
      p1.splice(i, 1);
    }
  }
  for (let i = 0; i < p2.length; i++) {
    // pieces[i].display();
    // pieces[i].move();

    p2[i].display();
    p2[i].move();

    //collision detection
    // if (pieces[i].pos.dist(frogPos) < 30) {
    //   pieces.splice(i, 1);
    // }
    if (p2[i].pos.dist(frogPos) < 30) {
      p2.splice(i, 1);
    }
  }
  for (let i = 0; i < p3.length; i++) {
    // pieces[i].display();
    // pieces[i].move();

    p3[i].display();
    p3[i].move();

    //collision detection
    // if (pieces[i].pos.dist(frogPos) < 30) {
    //   pieces.splice(i, 1);
    // }
    if (p3[i].pos.dist(frogPos) < 30) {
      p3.splice(i, 1);
    }
  }

  if (p1.length <=0 || p2.length <=0 || p3.length <=0) {
    timer = 0;
    state = 2;
  }
  
  // add a "frog"
  fill("green");
  image(catcher, frogPos.x, frogPos.y, 100, 60);
  checkForKeys();
}


function resetTheGame(){
  p1= [];
  p2= [];
  p3= [];
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p1.push(new Bottle());
  }
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p2.push(new Can());
  }
  for (let i = 0; i < 10; i++) {
    // pieces.push(new Piece());
    p3.push(new Worm());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}
// class Piece {
//   // constructor and attributes
//   constructor() {
//     this.pos = createVector(random(width), 100); // initialize your attributes here
//     this.velocity = createVector(0, random(3));
//     // this.r = random(255);
//     // this.g = random(255);
//     // this.b = random(255);
//     // this.o = random(100);
//     // this.size = random(48, 128);
//   }
//   // methods

//   display() {
//     // this can be text, images, or shapes
//      image(p1,this.pos.x, this.pos.y);
//      image(p2,this.pos.x, this.pos.y);
//      image(p3,this.pos.x, this.pos.y);
//   }

//   move() {
//     this.pos.add(this.velocity);
//     if (this.pos.x > width) this.pos.x = 0;
//     if (this.pos.x < 0) this.pos.x = width;
//     if (this.pos.y > height) this.pos.y = 0;
//     if (this.pos.y < 0) this.pos.y = height;
//   }
// }
class Bottle {
  // constructor and attributes
  constructor() {
    this.pos = createVector(width + random(400), random(height)); // initialize your attributes here
    this.velocity = createVector(random(-2,0), 0);
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    // this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
     image(bottle,this.pos.x, this.pos.y, 51, 50);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
class Can {
  // constructor and attributes
  constructor() {
    this.pos = createVector(width + random(400), random(height)); // initialize your attributes here
    this.velocity = createVector(random(-2,0), 0);
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    // this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
     image(can,this.pos.x, this.pos.y, 51, 50);
  }

  move() {
    this.pos.add(this.velocity);
   if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
class Worm {
  // constructor and attributes
  constructor() {
    this.pos = createVector(width + random(400), random(height)); // initialize your attributes here
    this.velocity = createVector(random(-2,0), 0);
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    // this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
     image(worm,this.pos.x, this.pos.y, 49, 39);
  }

  move() {
    this.pos.add(this.velocity);
   if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
