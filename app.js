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
}

var circles = [];

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.colorR = 255 * random();
  this.colorG = 255 * random();
  this.colorB = 255 * random();
  this.colorA = 255 * random();

  this.increaseSize = function() {
    if (this.r < windowWidth * 1.5) {
      this.r += 20;
      this.y += 5;
    }
    else {
      circles.shift();
    }
  }
}

function draw() {
    clear();
    background(0);
    random() < 0.5 ? circles.push(new Circle(windowWidth / 2, -200, 100)) : '';

    circles.forEach(function(circle) {
      stroke(0, 100, 200, 100);
      circle.increaseSize.bind(circle)();
      ellipse(circle.x, circle.y, circle.r);
    });
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 38)
    k += 5;
  else if (e.keyCode === 40)
    k -= 5;
});

function mouseClicked() {
  redraw();
}

function randomSign() {
  return random() < 0.5 ? -1 : 1;
}