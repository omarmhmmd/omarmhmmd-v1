/******** LAYER COLORS ********/
var x = document.getElementsByClassName("layers");
for (var i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "#FFF";
}

var duration = 2000;
var easing = 'easeInOutQuad';
var h = Math.floor(Math.random()*361);
var s = 75;
//var h = 77;

window.onload = function() {
  var layer001 = anime({
    targets: '.layer001',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 50%)',
    duration: duration,
    delay:0,
    easing:easing
  });
  var layer002 = anime({
    targets: '.layer002',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 56.7%)',
    duration: duration,
    delay:500,
    easing:easing
  });
  var layer003 = anime({
    targets: '.layer003',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 62.4%)',
    duration: duration,
    delay:1000,
    easing:easing
  });
  var layer004 = anime({
    targets: '.layer004',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 69.1%)',
    duration: duration,
    delay:1500,
    easing:easing
  });
  var layer005 = anime({
    targets: '.layer005',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 75.8%)',
    duration: duration,
    delay:2000,
    easing:easing
  });

  var layer006 = anime({
    targets: '.layer006',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 82.5%)',
    duration: duration,
    delay:3000,
    easing:easing
  });

  var layer007 = anime({
    targets: '.layer007',
    backgroundColor: 'hsl(' + h + ',' + s + '%, 89.2%)',
    duration: duration,
    delay:3000,
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
