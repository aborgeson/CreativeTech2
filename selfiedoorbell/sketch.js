let capture;
let video;
let timer = 5

let myFont;

function preload() {
  myFont = loadFont('SourceSansPro-SemiBold.ttf');
}

function setup() {
  createCanvas(600,580);
  colorMode(HSB);
  video = createCapture(VIDEO);
  video.position(0,0);
  video.size(320, 240)
  
  //font
  fill(0,0,100);
  textFont(myFont);
}

function draw() {
    background(0,23,100);
     video.show();
         // filter('THRESHOLD');
         image(video, 0, 0, 640, 480);
		video.hide();
  
  selfieTimer();       
  textAlign(CENTER, CENTER);
  textSize(40);
  text(timer, width/2, 520);
}

function selfieTimer() {
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then     a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("I visited Arianna's House!", width/2, 520);
    save('mySelfie.jpg');
    noLoop();
		timer.hide();
  }
  
}