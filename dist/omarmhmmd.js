(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/******** LAYER COLORS ********/
var x = document.getElementsByClassName("layers");
for (var i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "#FFF";
}

var durationColors = 2000;
var durationLayers = 1000;
var easing = 'easeInOutQuad';
var h = Math.floor(Math.random()*361);
var s = 75;
//var h = 77;

var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';

window.onload = function() {
  var layer001 = anime({
    targets: '.layer001',
    backgroundColor: color001,
    duration: durationColors,
    delay:0,
    easing:easing
  });
  var layer002 = anime({
    targets: '.layer002',
    backgroundColor: color002,
    duration: durationColors,
    delay:500,
    easing:easing
  });
  var layer003 = anime({
    targets: '.layer003',
    backgroundColor: color003,
    duration: durationColors,
    delay:1000,
    easing:easing
  });
  var layer004 = anime({
    targets: '.layer004',
    backgroundColor: color004,
    duration: durationColors,
    delay:1500,
    easing:easing
  });
  var layer005 = anime({
    targets: '.layer005',
    backgroundColor: color005
    ,
    duration: durationColors,
    delay:2000,
    easing:easing
  });

  var layer006 = anime({
    targets: '.layer006',
    backgroundColor: color006,
    duration: durationColors,
    delay:3000,
    easing:easing
  });

  var layer007 = anime({
    targets: '.layer007',
    backgroundColor: color007,
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
$(".buttonLayer001").click(function() {
  if (!clickedLayer001) {
    $(".layer001").removeClass("L1");
    $(".layer002").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer006").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");

    $(".info001").css("display", "inline");

    $(".layer001").css({borderBottom: 'solid #000 0.15vw'});

    var moveLayer001 = anime({
      targets: '.layer001',
      translateY: "-130%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor001 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color001],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button001',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    // var childOne = anime({
    //   targets: '.layer001 li:nth-child(1)',
    //   translateX:60,
    //   easing:easing,
    //   duration:durationLayers
    // });
    clickedLayer001 = true;
  }
  else if (clickedLayer001) {
    console.log("back");
    $(".layer001").addClass("L1");
    $(".layer002").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer006").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");

    $(".info001").css("display", "none");

    $(".layer001").css({borderBottom: 'solid #000 0vw'});

    var moveLayer001 = anime({
      targets: '.layer001',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor001 = anime({
      targets: 'body',
      backgroundColor: [color001, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button001',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    // var childOne = anime({
    //   targets: '.layer001 li:nth-child(1)',
    //   translateX:0,
    //   easing:easing,
    //   duration:durationLayers
    // });
    clickedLayer001 = false;
  }
})
/******** END LAYER 001 ********/

/******** LAYER 002 ********/
var clickedLayer002 = false;
$(".button002").click(function() {
  console.log("layer002 Clicked");
  if (!clickedLayer002) {
    $(".layer002").removeClass("L2");

    $(".layer001").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer006").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");

    $(".layer002").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer002 = anime({
      targets: '.layer002',
      translateY: "-230%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor002 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color002],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button002',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer002 = true;
  }
  else if (clickedLayer002) {
    console.log("back from 002");
    $(".layer002").addClass("L2");
    $(".layer001").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer006").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");

    $(".layer002").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer002 = anime({
      targets: '.layer002',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor002 = anime({
      targets: 'body',
      backgroundColor: [color002, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button002',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer002 = false;
  }
})
/******** END LAYER 002 ********/

/******** LAYER 003 ********/
var clickedLayer003 = false;
$(".button003").click(function() {
  console.log("layer003 Clicked");
  if (!clickedLayer003) {
    $(".layer003").removeClass("L3");
    $(".layer001").css("visibility", "hidden");
    $(".layer002").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer006").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");

    $(".layer003").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer003 = anime({
      targets: '.layer003',
      translateY: "-325%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor003 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color003],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button003',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer003 = true;
  }
  else if (clickedLayer003) {
    console.log("back from 003");
    $(".layer003").addClass("L3");
    $(".layer001").css("visibility", "visible");
    $(".layer002").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer006").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");

    $(".layer003").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer003 = anime({
      targets: '.layer003',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor003 = anime({
      targets: 'body',
      backgroundColor: [color003, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button003',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer003 = false;
  }
})
/******** END LAYER 003 ********/

/******** LAYER 004 ********/
var clickedLayer004 = false;
$(".button004").click(function() {
  console.log("layer004 Clicked");
  if (!clickedLayer004) {
    $(".layer004").removeClass("L4");
    $(".layer001").css("visibility", "hidden");
    $(".layer002").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer006").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");

    $(".layer004").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer004 = anime({
      targets: '.layer004',
      translateY: "-425%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor004 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color004],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button004',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer004 = true;
  }
  else if (clickedLayer004) {
    console.log("back from 004");
    $(".layer004").addClass("L4");
    $(".layer001").css("visibility", "visible");
    $(".layer002").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer006").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");

    $(".layer004").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer004 = anime({
      targets: '.layer004',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor004 = anime({
      targets: 'body',
      backgroundColor: [color004, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button004',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer004 = false;
  }
})
/******** END LAYER 004 ********/

/******** LAYER 005 ********/
var clickedLayer005 = false;
$(".button005").click(function() {
  console.log("layer005 Clicked");
  if (!clickedLayer005) {
    $(".layer005").removeClass("L5");
    $(".layer001").css("visibility", "hidden");
    $(".layer002").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer006").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");

    $(".layer005").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer005 = anime({
      targets: '.layer005',
      translateY: "-525%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor005 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color005],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button005',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer005 = true;
  }
  else if (clickedLayer005) {
    console.log("back from 005");
    $(".layer005").addClass("L5");
    $(".layer001").css("visibility", "visible");
    $(".layer002").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer006").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");

    $(".layer005").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer005 = anime({
      targets: '.layer005',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor005 = anime({
      targets: 'body',
      backgroundColor: [color005, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button005',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer005 = false;
  }
})
/******** END LAYER 005 ********/

/******** LAYER 006 ********/
var clickedLayer006 = false;
$(".button006").click(function() {
  console.log("layer006 Clicked");
  if (!clickedLayer006) {
    $(".layer006").removeClass("L6");
    $(".layer001").css("visibility", "hidden");
    $(".layer002").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer007").css("visibility", "hidden");
    setTimeout( function(){
      $(".title").css('visibility','hidden');
    },800);

    $(".layer006").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer006 = anime({
      targets: '.layer006',
      translateY: "-625%",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor006 = anime({
      targets: 'body',
      backgroundColor: ['#FFF', color006],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button006',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer006 = true;
  }
  else if (clickedLayer006) {
    console.log("back from 006");
    $(".layer006").addClass("L6");
    $(".layer001").css("visibility", "visible");
    $(".layer002").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer007").css("visibility", "visible");
    $(".title").css("visibility", "visible");

    $(".layer006").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer006 = anime({
      targets: '.layer006',
      translateY: "0",
      easing:easing,
      duration:durationLayers,
    });
    var bgColor006 = anime({
      targets: 'body',
      backgroundColor: [color006, '#FFF'],
      //delay: durationLayers * 2,
      easing:easing,
      duration:durationColors / 2
    });
    var button = anime({
      targets: '.button006',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer006 = false;
  }
})
/******** END LAYER 006 ********/

},{}]},{},[1]);
