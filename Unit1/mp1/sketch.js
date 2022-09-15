let dream ;
let bg = (20,50, 80);


function preload() {
dream = loadSound("assets/dreams.mp3");
} 


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bg);
  fill(218, 69, 255);
  textSize(10);
  text("Meet Omowunmi. Omowunmi is a visual representation of a pregnant woman and the mood swings she experiences during pregnancy.", width/2 -100,40, 250);
  fill(168, 96, 50)
  rect(width/2-20, height/2-80, 80,110);
  // This is the hands
  fill("black");
  
  rect(width/2-45, height/2-45, 25,140)
  rect(width/2+60, height/2-45, 25,140)
  fill(168, 96, 50)
  ellipse(width/2+20, height/2-110, 120)
  fill("black")
  ellipse(width/2-45, height/2-80,40)
  ellipse(width/2-35, height/2-50,40)
  ellipse(width/2-45, height/2-110,40)
  ellipse(width/2-30, height/2-140,40)
  ellipse(width/2-10, height/2-169,40)
   ellipse(width/2+25, height/2-180,40)
ellipse(width/2+57, height/2-175,40)
  ellipse(width/2+80, height/2-145,40)
  ellipse(width/2+90, height/2-110,40)
  ellipse(width/2+95, height/2-85,40)
  ellipse(width/2+90, height/2-65,40)
  fill("black")
  ellipse(width/2+5, height/2-130,10)
  ellipse(width/2+45, height/2-130,10)

  fill("black")
  rect(width/2-5, height/2+130, 25,240)
  rect(width/2+50, height/2+130, 25,240)
   fill(168, 96, 50)
  ellipse(width/2+35, height/2+80, 150)
}
function mouseReleased(){
   if(dream.isPlaying()) {
     dream.pause();
        bg = (random(0, 255), random(0, 255), random(0, 255));
   } else {
     dream.play();
        bg = (20,50, 80);
    
   }
 }