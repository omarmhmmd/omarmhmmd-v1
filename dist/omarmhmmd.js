(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/******** LAYER COLORS ********/
var x = document.getElementsByClassName("layers");
for (var i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "#FFF";
}

var durationColors = 2000;
var durationLayers = 500;
var easing = 'easeInOutQuad';
var h = Math.floor(Math.random()*361);
var s = 75;
//var h = 77;

window.onload = function() {
  var layer001 = anime({
    targets: '.layer001',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 50%)',
    duration: durationColors,
    delay:0,
    easing:easing
  });
  var layer002 = anime({
    targets: '.layer002',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 56.7%)',
    duration: durationColors,
    delay:500,
    easing:easing
  });
  var layer003 = anime({
    targets: '.layer003',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 62.4%)',
    duration: durationColors,
    delay:1000,
    easing:easing
  });
  var layer004 = anime({
    targets: '.layer004',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 69.1%)',
    duration: durationColors,
    delay:1500,
    easing:easing
  });
  var layer005 = anime({
    targets: '.layer005',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 75.8%)',
    duration: durationColors,
    delay:2000,
    easing:easing
  });

  var layer006 = anime({
    targets: '.layer006',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 82.5%)',
    duration: durationColors,
    delay:3000,
    easing:easing
  });

  var layer007 = anime({
    targets: '.layer007',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 89.2%)',
    duration: durationColors,
    delay:3500,
    easing:easing
  });
}
/******** END LAYER COLORS ********/

/******** TOOLTIP ********/
dw_Tooltip.defaultProps = {
    //supportTouch: true, // set false by default
    wrapFn: dw_Tooltip.wrapImageToWidth
}

dw_Tooltip.content_vars = {
    L1: {
        img: 'images/sfmomabathrooms.jpg',
        w: 200, // width of image
        h: 300 // height of image
    },
    L2: {
        img: 'images/monolith.jpg',
        w: 300, // width of image
        h: 200 // height of image
    },
    L3: {
        img: 'images/qiblah.jpg',
        w: 300, // width of image
        h: 200 // height of image
    },
    L4: {
        img: 'images/josefAlbersBot.jpg',
        w: 300, // width of image
        h: 200 // height of image
    },
    L5: {
        img: 'images/shade.jpg',
        w: 237.5, // width of image
        h: 300 // height of image
    },
    L6: {
        img: 'images/BlackRose.png',
        w: 225, // width of image
        h: 300 // height of image
    }
}
/******** END TOOLTIP ********/

/******** LAYER 001 ********/
var clickedLayer001 = false;
$("button").click(function() {
  if (!clickedLayer001) {
    $(".layer001").removeClass("L1");
    $(".layer002").css("display", "none");
    $(".layer003").css("display", "none");
    $(".layer004").css("display", "none");
    $(".layer005").css("display", "none");
    $(".layer006").css("display", "none");
    $(".layer007").css("display", "none");

    $(".layer001").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var animation = anime({
      targets: '.layer001',
      translateY: "-125%",
      easing:easing,
      duration:durationLayers,
    });
    var animation = anime({
      targets: 'body',
      backgroundColor: ['#FFF', 'hsl(' + h + ',' + s + '%, 50%)'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var animation = anime({
      targets: 'button',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer001 = true;
  }
  else if (clickedLayer001) {
    console.log("back");
    $(".layer001").addClass("L1");
    $(".layer002").css("display", "");
    $(".layer003").css("display", "");
    $(".layer004").css("display", "");
    $(".layer005").css("display", "");
    $(".layer006").css("display", "");
    $(".layer007").css("display", "");

    $(".layer001").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var animation = anime({
      targets: '.layer001',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var animation = anime({
      targets: 'body',
      backgroundColor: ['hsl(' + h + ',' + s + '%, 50%)', '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var animation = anime({
      targets: 'button',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer001 = false;
  }

})
/******** END LAYER 001 ********/

},{}]},{},[1]);
