if($(window).width() < $(window).height()) {
  console.log("mobile");
    document.getElementById("title").innerHTML = "Omar Mohammad is an artist/designer/progammer <br> but it would be cool if you viewed his work on a real screen. For now you can see what he's up to on the <a style = 'text-decoration: underline; font-family:nh55 !important;' target = '_blank' href= 'https://www.instagram.com/flwrboi/'>internet</a> or you can send him an <a style = 'text-decoration: underline; font-family:nh55 !important;' href='mailto:omar.mhmmd@gmail.com'>e-mail</a>.";
    document.getElementsByTagName("button").disabled = true;
}
