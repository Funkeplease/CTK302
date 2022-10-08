let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
    i1 = loadImage ("assets/blackgirl.jpeg");
    i2 = loadImage ("assets/happy.jpg");
    i3 = loadImage ("assets/plant.jpeg");
    imageMode(CENTER);
  }


function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Hi, this is me,", 5, 22) ; 
      break ;
      
      case 1: 
       text("I am happy", 5, 22) ; 
      // put a picture here
      image(i1, width / 2, height / 2 - 120, 100, 100);
      break ;
      
      case 2:
      text("and I love plants!", 5, 22) ; 
            // put a picture here
            image(i2, width / 2, height / 2, 100, 100);
      break ;
      
      case 3:
     text("three are touching the screen", 5, 22) ; 
            // put a picture here
            image(i3, width / 2, height / 2 + 120, 100, 100);
      break ;
    
      
  }
  
}