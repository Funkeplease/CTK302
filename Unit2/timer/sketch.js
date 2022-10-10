let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  switch(state){
    case 0:
      background("yellow");
   
      //put image and text
      
      timer++ ;
      if (timer > 3*60){
        timer = 0;
        state = 1;
      }
      break;
      
       case 1:
      background("brown");
        //put image and text
      
      timer++ ;
      if (timer > 7*60){
        timer = 0;
        state = 2;
      }
      break;
      
       case 2:
      background("pink");
        //put image and text
      
      timer++ ;
      if (timer > 5*60){
        timer = 0;
        state = 0;
      }
      break;
  }
}