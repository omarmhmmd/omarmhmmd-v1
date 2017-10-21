(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*var randomColorRGB = require('random-color-rgb');
console.log(randomColorRGB({opacity: 1}));
var color = randomColorRGB();*/
var duration = 1000;
var easing = 'easeInQuad';
 window.onload = function() {
  var layer002 = anime({
    targets: '.layer002',
    translateY: [{ value: "80.5px", duration: duration },],
    easing: easing,
    delay: 0,
  });
  var layer003 = anime({
    targets: '.layer003',
    translateY: [{ value: "164px", duration: duration },],
    easing: easing,
    delay: 800,
  });
  var layer004 = anime({
    targets: '.layer004',
    translateY: [{ value: "248px", duration: duration },],
    easing: easing,
    delay: 1600,
  });
  var layer005 = anime({
    targets: '.layer005',
    translateY: [{ value: "332px", duration: duration },],
    easing: easing,
    delay: 2400,
  });


}

var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);

var x = document.getElementsByClassName("layers");
var i,z;
for (i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "rgba("+ r +"," + g + "," + b + "," + "0." + (9 - i) + ")";
  console.log("rgba("+ r +"," + g + "," + b + "," + "0." + (9 - i) + ")");
}

},{}]},{},[1]);
