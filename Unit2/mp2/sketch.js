var mic;
var vol = 0;
let total = 0;
let state = 0;
let s1;
let f1,f2,f3,f4,f5;
let i1;

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
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  angleMode(DEGREES);
  noStroke();
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background("#1F85DE");

  switch (state) {
    case 0:
      // text on the screen for debugging
      fill("black");
      textSize(20);
      text("Click to start",width / 2, height / 2+200);
      textFont(f1, 25) ;
     text("Most Domestic violence cases are not reported and this leads to a spiral of ills. This state machine which is an alarm that goes off after a minute of consistent yelling is designed to enable reporting. Keep yelling for a minute and let's see what happens.", width/2, height/2,400, 200);
      break;

    case 1:
      // get the sound input
      vol = mic.getLevel(); // returned level is between 0 and 1

      total += 3 * vol;
      //    fill("black");
      // textSize(10);
      // text(vol.toFixed(3), 30, 30);

      let secs = int(total / 3);

      // this will determine which quadrant of the circle we are in
      let whichQuadrant = int(secs / 15);
      // text(whichQuadrant, 200, 240);

      fill("white");
      textFont(f1, 20);
      

      switch (whichQuadrant) {
          
        case 0: // 0-15 seconds
          background("red");  // you can change this!
          if (int(total) > 0) {
            fill("white");  // you can change this!
            arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          }
          fill("black");  // you can change this!
          textFont(f2, 20);
          text("Yell!", width / 2, height / 2);
          break;

        case 1: // 16-30 seconds
          background("#1F25DE");
          fill("#white");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("black");
          textFont(f1, 20);
          text("Hey, are you good?", width / 2, height / 2);

          break;

        case 2: // 31-45 seconds
          background("#D81FDE");
          fill("white");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("black");
          textFont(f4, 20);
          text("Take deep breaths...", width / 2, height / 2);

          break;

        case 3: // 46-59 seconds
          background ("#1FDED8");
          image(i1, width/2,height/2 + 150, 100, 100);
          fill("white");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("black");
          textFont(f5, 20);
          text("Help is coming!", width / 2, height / 2);
          //state++;
          if (!s1.isPlaying()){
            s1.play();
          }
          if (secs > 59){
            state = 2;
          }
          break;
      }

      fill("black");
      textSize(20);
      text(secs + " seconds", width / 2, height / 2 + 30);
      if (secs > 59) state = 2;
      break;

    case 2: // some sort of ending
      background("#1F85DE");
      textFont(f1, 20);
      text("You did great, you’ll be out of there soon!", width / 2, height / 2);
  }
}

function mouseReleased() {
  if (state == 0) state = 1;
  if (state == 2) {
    total = 0;
    state = 0;
  }
}
// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
