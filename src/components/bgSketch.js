import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
  }

  p5.draw = () => {
    p5.background("#040D14");;
    p5.noFill();
    p5.stroke('white');
    p5.translate(p5.width/2, p5.height/2);
    
    for (let i = 0; i<200; i++) {
        p5.push();
        p5.rotate(p5.sin(p5.frameCount+i) * 100);
        p5.rect(0, 0, 600-i*3, 600-i*3, 200-i);
        p5.pop();
      }
  };
}

export default function BgSketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}