console.log("hi");
if($(window).width() < $(window).height()) {
  console.log("mobile");
    $('html').css("overflow", "hidden");
    $('ul').css("padding-bottom", "22%");
    $('.title h1').css("font-size", "2.25vh");
    document.getElementById("title").innerHTML = "Omar Mohammad is an artist, designer and progammer but it would be cool if you viewed his work on a real screen.";
    document.getElementsByTagName("button").disabled = true;
}
