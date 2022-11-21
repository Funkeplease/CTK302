var bubbles = [];
let url = "";
let f1;

function setup() {
  // let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  let key = "1j26xsanb7-1rIzbbgW3qmKoRWs0G1vUNKngqwVpI6tA"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is the first thing you notice about a person?"],
        data[i]["What's one key thing for you when it comes to friendships?"],
        data[i]["How open are you to people who don't share your Nationality?"],
        data[i]["Hi, what's your name?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("pink");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(notice, friendships, nationality, name) {
    // only the order of these parameters matters!
    this.notice = notice;
    this.friendships = friendships;
    this.nationality = nationality;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("white");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    text(
      this.name + "\n" + this.notice + "\n" + this.friendships + "\n" + this.nationality + "\n",
      this.pos.x,
      this.pos.y
    );
  this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;
  
    
  }
  
  
}
