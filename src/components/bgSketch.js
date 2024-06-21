import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.angleMode(DEGREES);
    p5.rectMode(CENTER);
  }

  p5.draw = () => {
    p5.background("#192025");;
    p5.noFill();
    p5.stroke('white');
    p5.translate(p5.width/2, p5.height/2);
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };

  
  function draw() {
    
    
    
    
    // translate to the center of the page
    
    
    for (let i = 0; i<200; i++) {
      push();
      rotate(sin(frameCount+i) * 100);
      rect(0, 0, 600-i*3, 600-i*3, 200-i);
      pop();
    }
  }
}

export function BgSketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}