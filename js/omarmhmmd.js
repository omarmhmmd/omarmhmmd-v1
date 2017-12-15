var randomColorRGB = require('random-color-rgb');
randomColorRGB();

/******** TOOLTIP ********/
dw_Tooltip.defaultProps = {
    //supportTouch: true, // set false by default
    wrapFn: dw_Tooltip.wrapImageToWidth
}

dw_Tooltip.content_vars = {
    L1: {
        img: 'images/logoB&W.png',
        w: 300 // width of image
        // height of image
    },
    L2: {
        img: 'images/monolith.gif',
        w: 300, // width of image
        h: 300 // height of image
    },
    L3: {
        img: 'images/qiblahLogo.png',
        w: 300, // width of image
        h: 300 // height of image
    },
    L4: {
        img: 'images/albersLogo.png',
        w: 300, // width of image
    },
    // L5: {
    //     img: 'images/shade.jpg',
    //     w: 237.5, // width of image
    //     h: 300 // height of image
    // },
    // L6: {
    //     img: 'images/BlackRose.png',
    //     w: 225, // width of image
    //     h: 300 // height of image
    // }
}
/******** END TOOLTIP ********/

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
var s =Math.floor(Math.random()*101);
var layerFadeIn = 750;

// var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
// var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
// var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
// var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
// var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
// var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
// var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';

// var x = Math.floor(Math.random()*11);
// console.log(x);
// if (x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9) {
//   var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
//   var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
//   var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
//   var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
//   var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
//   var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
//   var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';
// }
// else if (x == 10) {
//   console.log("ten");
//   var color001 = randomColorRGB();
//   var color002 = randomColorRGB();
//   var color003 = randomColorRGB();
//   var color004 = randomColorRGB();
//   var color005 = randomColorRGB();
//   var color006 = randomColorRGB();
//   var color007 = randomColorRGB();
// }

  var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
  var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
  var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
  var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
  var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
  var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
  var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';

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
/******** END LAYER COLORS ********/

$(".layer001, .layer002, .layer003, .layer004, .layer005, .layer006").click(function() {
  // $(".title").css("visibility", "hidden");
})

if($(window).width() > $(window).height()) {
  /******** LAYER 001 ********/
  var clickedLayer001 = false;
  $(".layer001").click(function() {
    if (!clickedLayer001) {
      $(".layer001").removeClass("L1");

      $(".layer002").css("visibility", "hidden");
      $(".layer003").css("visibility", "hidden");
      $(".layer004").css("visibility", "hidden");
      $(".layer005").css("visibility", "hidden");
      $(".layer006").css("visibility", "hidden");
      $(".layer007").css("visibility", "hidden");

      $(".info001").fadeIn(2500);
      // setTimeout(function(){ $(".info001").css("display", "block"); }, 1750);
      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 750);

      $(".layer001").css({borderBottom: 'solid #000 0.15vw'});

      var info = anime({
        targets: '.info001',
        easing:easing,
        duration:durationLayers,
      });
      var moveLayer001 = anime({
        targets: '.layer001',
        translateY: "-163%",
        easing:easing,
        duration:durationLayers,
      });
      var bgColor001 = anime({
        targets: 'body',
        backgroundColor: ['#FFF', color001],
        delay: durationLayers * 2,
        easing:easing,
        duration:durationColors / 2,
        delay: layerFadeIn
      });
      var button = anime({
        targets: '.button001',
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

      $(".layer002").css("visibility", "visible");
      $(".layer003").css("visibility", "visible");
      $(".layer004").css("visibility", "visible");
      $(".layer005").css("visibility", "visible");
      $(".layer006").css("visibility", "visible");
      $(".layer007").css("visibility", "visible");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

      // $(".info001").fadeOut(500);
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
        duration:durationColors / 2,
        delay: layerFadeIn
      });
      var button = anime({
        targets: '.button001',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });

      clickedLayer001 = false;
    }
  })
  /******** END LAYER 001 ********/

  /******** LAYER 002 ********/
  var clickedLayer002 = false;
  $(".layer002").click(function() {
    console.log("layer002 Clicked");
    if (!clickedLayer002) {
      $(".layer002").removeClass("L2");

      $(".layer001").css("visibility", "hidden");
      $(".layer003").css("visibility", "hidden");
      $(".layer004").css("visibility", "hidden");
      $(".layer005").css("visibility", "hidden");
      $(".layer006").css("visibility", "hidden");
      $(".layer007").css("visibility", "hidden");

      $(".info002").fadeIn(2500);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 750);

      $(".layer002").css({borderBottom: 'solid #000 0.15vw'}).animate({
           borderWidth: "0.15vw"
       }, 500);
      var moveLayer002 = anime({
        targets: '.layer002',
        translateY: "-260%",
        easing:easing,
        duration:durationLayers,
      });
      var bgColor002 = anime({
        targets: 'body',
        backgroundColor: ['#FFF', color002],
        //delay: durationLayers * 2,
        easing:easing,
        duration:durationColors / 2,
        delay: layerFadeIn
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

      $(".info002").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

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
        duration:durationColors / 2,
        delay: layerFadeIn
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
  $(".layer003").click(function() {
    console.log("layer003 Clicked");
    if (!clickedLayer003) {
      $(".layer003").removeClass("L3");
      $(".layer001").css("visibility", "hidden");
      $(".layer002").css("visibility", "hidden");
      $(".layer004").css("visibility", "hidden");
      $(".layer005").css("visibility", "hidden");
      $(".layer006").css("visibility", "hidden");
      $(".layer007").css("visibility", "hidden");

      $(".info003").fadeIn(3250);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 800);

      $(".layer003").css({borderBottom: 'solid #000 0.15vw'}).animate({
           borderWidth: "0.15vw"
       }, 500);
      var moveLayer003 = anime({
        targets: '.layer003',
        translateY: "-358%",
        easing:easing,
        duration:durationLayers,
      });
      var bgColor003 = anime({
        targets: 'body',
        backgroundColor: ['#FFF', color003],
        //delay: durationLayers * 2,
        easing:easing,
        duration:durationColors / 2,
        delay: layerFadeIn
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

      $(".info003").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 200);

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
        duration:durationColors / 2,
        delay: layerFadeIn
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
  $(".layer004").click(function() {
    console.log("layer004 Clicked");
    if (!clickedLayer004) {
      $(".layer004").removeClass("L4");
      $(".layer001").css("visibility", "hidden");
      $(".layer002").css("visibility", "hidden");
      $(".layer003").css("visibility", "hidden");
      $(".layer005").css("visibility", "hidden");
      $(".layer006").css("visibility", "hidden");
      $(".layer007").css("visibility", "hidden");

      $(".info004").fadeIn(3250);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 1200);

      $(".layer004").css({borderBottom: 'solid #000 0.15vw'});

      var moveLayer004 = anime({
        targets: '.layer004',
        translateY: "-457%",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      var bgColor004 = anime({
        targets: 'body',
        backgroundColor: ['#FFF', color004],
        //delay: durationLayers * 2,
        easing:easing,
        duration:durationColors / 2,
        delay: layerFadeIn
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

      $(".info004").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

      $(".layer004").css({borderBottom: 'solid #000 0vw'});

      var moveLayer004 = anime({
        targets: '.layer004',
        translateY: "0",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      var bgColor004 = anime({
        targets: 'body',
        backgroundColor: [color004, '#FFF'],
        //delay: durationLayers * 2,
        easing:easing,
        duration:durationColors / 2,
        delay: layerFadeIn
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
  $(".layer005").click(function() {
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
        duration:durationColors / 2,
        delay: layerFadeIn
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
        duration:durationColors / 2,
        delay: layerFadeIn
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
  $(".layer006").click(function() {
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
        duration:durationColors / 2,
        delay: layerFadeIn
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
        duration:durationColors / 2,
        delay: layerFadeIn
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
}
