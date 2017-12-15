console.log("hi");
if($(window).width() < $(window).height()) {
  console.log("mobile");
    $('html').css("overflow", "hidden");
    $('ul').css("padding-bottom", "23.5%");
    $('.title h1').css("font-size", "5.25vh");
    $('.title h1').css("position", "absolute");
    $('.title h1').css("line-height", "275%");
    document.getElementById("title").innerHTML = "Omar Mohammad </br> is an artist, designer and progammer but it would be cool if you viewed his work on a real screen.";
    document.getElementsByTagName("button").disabled = true;
    $('.menu').css("margin-top", "-2.5%");
    $(".layers ul").empty();
}
