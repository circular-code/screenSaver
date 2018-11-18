"use strict";
/* jshint -W117 */
/* jshint -W098 */

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke('#ffffff');
  strokeWeight(20);
  frameRate(30);
  fill(0,0,0,0);
  rectMode(CENTER);
}

var rects = [];

function Rect(x, y, width, height, transformArray) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height
  this.colorR = 255 * random();
  this.colorG = 255 * random();
  this.colorB = 255 * random();
  this.colorA = 255 * random();
  this.transformCounter = 1;
  this.transformArray = transformArray;

  this.shiftAround = function(array) {
    if (this.transformCounter < windowWidth / 2) {
      this.transformCounter++
    }
    else {
      rects.shift();
    }
  }
}

function draw() {
    clear();
    background(0);

    rects.forEach(function(rectangle, index) {
      fill(256, 256, 256, 50);
      rectangle.shiftAround.bind(rectangle)();
      translate(rectangle.transformCounter * rectangle.transformArray[0], rectangle.transformCounter * rectangle.transformArray[1]);
      console.log(index + ' index ____ ' + rectangle.transformCounter * rectangle.transformArray[0], rectangle.transformCounter * rectangle.transformArray[1]);
      rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      translate(rectangle.transformCounter * rectangle.transformArray[0] * -1, rectangle.transformCounter * rectangle.transformArray[1] * -1);
    });
}

function mouseClicked (e) {
  rects.push(new Rect(windowWidth / 2, windowHeight / 2, 100, 100, [1,1]));
  rects.push(new Rect(windowWidth / 2, windowHeight / 2, 100, 100, [1,-1]));
  rects.push(new Rect(windowWidth / 2, windowHeight / 2, 100, 100, [-1,1]));
  rects.push(new Rect(windowWidth / 2, windowHeight / 2, 100, 100, [-1,-1]));
  return false;
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 38)
    k += 5;
  else if (e.keyCode === 40)
    k -= 5;
});

function randomSign() {
  return random() < 0.5 ? -1 : 1;
}