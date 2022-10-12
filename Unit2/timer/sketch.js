let i1, i2, i3;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/blackgirl.jpeg")
  i2 = loadImage("assets/happy.jpg")
  i3 = loadImage("assets/plant.jpeg")
  imageMode(CENTER);
}

function draw() {
  background(220);
  
  switch(state){
    case 0:
      background("yellow");
   
      //put image and text
      image(i1, width/2, height/2, 100, 100);
      text("I am a girl", 120, 120);
      timer++ ;
      if (timer > 3*60){
        timer = 0;
        state = 1;
      }
      break;
      
       case 1:
      background("brown");
        //put image and text
        image(i2, width/2, height/2,100, 100);
        text("I am happy", 120, 120);
      timer++ ;
      if (timer > 7*60){
        timer = 0;
        state = 2;
      }
      break;
      
       case 2:
      background("pink");
        //put image and text
        image(i3, width/2,height/2, 100, 100);
        text("and I love plants", 120, 120);
      timer++ ;
      if (timer > 5*60){
        timer = 0;
        state = 0;
      }
      break;
  }
}