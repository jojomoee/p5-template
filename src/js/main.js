//P5 SKETCH

let p5c = document.getElementById('container');
let width = p5c.offsetWidth;
let height = p5c.offsetHeight;

const s = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(width / 2 - 25, height / 2 - 25, 50, 50);
  };
};

let myp5 = new p5(s, p5c);
console.log(p5c.offsetWidth);
