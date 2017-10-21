(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*var randomColorRGB = require('random-color-rgb');
console.log(randomColorRGB({opacity: 1}));
var color = randomColorRGB();*/

var x = document.getElementsByClassName("layers");
var i,z;
for (i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "#FFF";
  console.log("rgb("+ r +"," + g + "," + b + ")");
}

var duration = 2000;
var easing = 'easeInOutQuad';
  /*var layer002 = anime({
    targets: '.layer002',
    translateY: [{ value: "80.5px", duration: duration },],
    easing: easing,
    delay: 0,
  });
  var layer003 = anime({
    targets: '.layer003',
    translateY: [{ value: "164px", duration: duration },],
    easing: easing,
    delay: 500,
  });
  var layer004 = anime({
    targets: '.layer004',
    translateY: [{ value: "248px", duration: duration },],
    easing: easing,
    delay: 1000,
  });
  var layer005 = anime({
    targets: '.layer005',
    translateY: [{ value: "332px", duration: duration },],
    easing: easing,
    delay: 1500,
  });
  var layer006 = anime({
    targets: '.layer006',
    translateY: [{ value: "416px", duration: duration },],
    easing: easing,
    delay: 2000,
  });
  var layer007 = anime({
    targets: '.layer007',
    translateY: [{ value: "500px", duration: duration },],
    easing: easing,
    delay: 2500,
  });*/

var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);

var h = Math.floor(Math.random()*361);

//var h = 50;

window.onload = function() {
  var layer001 = anime({
    targets: '.layer001',
    backgroundColor: 'hsl(' + h + ', 100%, 50%)',
    duration: duration,
    delay:0,
    easing:easing
  });
  var layer002 = anime({
    targets: '.layer002',
    backgroundColor:'hsl(' + h + ', 100%, 56.7%)',
    duration: duration,
    delay:500,
    easing:easing
  });
  var layer003 = anime({
    targets: '.layer003',
    backgroundColor:'hsl(' + h + ', 100%, 62.4%)',
    duration: duration,
    delay:1000,
    easing:easing
  });
  var layer004 = anime({
    targets: '.layer004',
    backgroundColor:'hsl(' + h + ', 100%, 69.1%)',
    duration: duration,
    delay:1500,
    easing:easing
  });
  var layer005 = anime({
    targets: '.layer005',
    backgroundColor:'hsl(' + h + ', 100%, 75.8%)',
    duration: duration,
    delay:2000,
    easing:easing
  });
  var layer006 = anime({
    targets: '.layer006',
    backgroundColor:'hsl(' + h + ', 100%, 82.5%)',
    duration: duration,
    delay:2500,
    easing:easing
  });
  var layer007 = anime({
    targets: '.layer007',
    backgroundColor:'hsl(' + h + ', 100%, 89.2%)',
    duration: duration,
    delay:3000,
    easing:easing
  });
}

},{}]},{},[1]);
