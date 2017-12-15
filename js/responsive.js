console.log("hi");
if($(window).width() < $(window).height()) {
  console.log("mobile");
    $('html').css("overflow", "hidden");
    $('ul').css("padding-bottom", "22%");
}
