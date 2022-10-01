let state = -1;
let s1, s2, s3 ;

function preload(){
  s1 = loadSound("assets/allthat.mp3");
  s2 = loadSound("assets/creativeminds.mp3");
  s3 = loadSound("assets/hey.mp3");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

  background("yellow");
  
  switch (state) {
    case -1:
      text("Please click to start", 100, 100); 

      break

case 0:
      text("Hey Funke", 100, 100);
      if(!s1.isPlaying()){
        s1.play() ;
      }
      break;

    case 1:
      text("You've got this!", 100, 100);
      if(!s2.isPlaying()){
        s2.play() ;
      }
      break;

    case 2:
      text("Lots of love, Funke", 100, 100);
      if(!s3.isPlaying()){
        s3.play() ;
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}