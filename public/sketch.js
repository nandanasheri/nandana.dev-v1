function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES);
  rectMode(CENTER);
  
}

function draw() {
  background("#192025");
  noFill();
  stroke('white')
  
  // translate to the center of the page
  translate(width/2, height/2);
  
  for (let i = 0; i<200; i++) {
    push();
    rotate(sin(frameCount+i) * 100);
    rect(0, 0, 600-i*3, 600-i*3, 200-i);
    pop();
  }
}