$(window).scroll(function() {
  if ($(document).scrollTop() < 50) {
    $('#profile-image').addClass('disappear');
  } else {
    $('#profile-image').removeClass('disappear');
  }
});

!function(a) { 
    "use strict";
    a("a.page-scroll").bind("click",function(b) {
        var c=a(this);
        a("html, body").stop().animate( {
            scrollTop:a(c.attr("href")).offset().top-60
        },1250,"easeInOutExpo"),
        b.preventDefault()
    })
    ,a("body").scrollspy( { 
        target:".navbar-fixed-top",offset:61
    })
    ,a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function() { 
        a(".navbar-toggle:visible").click()
    })
  //   ,a("h1").fitText(1.2, {
  //       minFontSize:"35px",maxFontSize:"45px"
  //   })
    ,a("#mainNav").affix( { 
    	offset:{top:100}
    })
} (jQuery);