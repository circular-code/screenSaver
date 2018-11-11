"use strict";
/* jshint -W117 */
/* jshint -W098 */

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke('#ffffff');
  fill(0,0,0,0);
}

var i = 0, j = 0, k = 10;

function draw() {
    stroke(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random());
    ellipse(mouseX, mouseY, k);
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 38)
    k += 5;
  else if (e.keyCode === 40)
    k -= 5;
});

function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}