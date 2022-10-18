let f1, f2, f3, f4, f5 ;
let mic;
let vol = 0;
let i1;
let state = 0;
let timer = 0;
let s1;
let loudest = 1;
let yell;
let aprVol = 0
let ease = 0.01

function preload(){
  s1 = loadSound("assets/warning.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  i1 = loadImage("assets/alarm.png")
  imageMode(CENTER);
  f1 = loadFont("assets/regular.ttf");
  f2 = loadFont("assets/band.ttf");
  f3 = loadFont("assets/easter.ttf");
  f4 = loadFont("assets/hangedletters.ttf");
  f5 = loadFont("assets/cutenotes.ttf");
  textAlign(CENTER);
  rectMode(CENTER);
  mic = new p5.AudioIn(); 
  mic.start();
}

function draw() {
  background(220);
  vol = mic.getLevel().toFixed(1);
 // aprVol += (vol - aprVol) * ease;
  aprVol = vol ;
  yell = map(aprVol, 0, 1, 0 , 10)
  switch(state){
    case 0:
      background("#1F85DE");
        //put font and text
        
        fill("black");
        textFont(f1, 20) ;
        text("Most Domestic violence cases are not reported and this leads to a spiral of ills. This state machine which is an alarm that goes off after a minute of consistent yelling is designed to enable reporting. Keep yelling for a minute and let's see what happens", width/2, height/2,400, 200);
      timer++ ;
      if (timer > 8*60){
        timer = 0;
        state = 1;
      }
      break;
      case 1:
        background("red")
        textFont(f2, 50) ;
      text("Yell", width/2, height/2);
      if (yell > 4){
        state = 2
      }

      break;

    case 2:
      background("#1F25DE");
   
      //put font and text
      
      fill("black");
      textFont(f2, 50) ;
      text("Hey,are you good?", width/2, height/2);
      timer++ ;
      if (timer > 3*60){
        timer = 0;
        state = 3;
      }
      break;
      
       case 3:
      background("#781FDE");
        //put font and text
        
        fill("black");
        textFont(f3, 50) ;
        text("Stay Positve", width/2, height/2);
      timer++ ;
      if (timer > 4*60){
        timer = 0;
        state = 4;
      }
      break;
      
       case 4:
      background("#D81FDE");
        //put font and text
        
        fill("black");
        textFont(f4, 50) ;
        text("Take deep breaths", width/2, height/2);
      timer++ ;
      if (timer > 6*60){
        timer = 0;
        state = 5;
      }
      break;

      case 5:
      background("#1FDED8");
        //put image, font and text
        image(i1, width/2,height/2 - 150, 100, 100);
        fill("black");
        textFont(f5, 50) ;
        text("Help is coming!", width/2, height/2);
      timer++ ;
      if(!s1.isPlaying()){
        s1.play() ;
      }
      if (timer > 8*60){
        timer = 0;
        state = 6;
      }
      break;

        case 6:
          background("#25DE1F");
            //put , font and text
  
            fill("black");
            textFont(f1, 40) ;
            text("You are doing great, you'll be out of there soon.",width/2, height/2);
          timer++ ;
          if (timer > 10*60){
            timer = 0;
            state = 0;
      }
      break;
  }
}