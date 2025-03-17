AOS.init({
  duration: 1200,
  once: true,
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});



// $(".navbar-toggler").click(function() {
//     $("body").addClass("show");
// });
// $(".remove-btn").click(function() {
//     $("body").removeClass("show");
// });


$(function() {
    $(".h--right > .navbar-toggler").on("click", function(a) {
        $("body").addClass("show");
        a.stopPropagation()
    });
    $(document).on("click", function(a) {
        if ($(a.target).is("body") === false) {
            $("body").removeClass("show");
        }
    });
});


$(function() {
    $(".navbar-toggler").on("click", function(a) {
        $("body").addClass("show");
        a.stopPropagation()
    });
    $(document).on("click", function(a) {
        if ($(a.target).is("body") === false) {
            $("body").removeClass("show-menu");
        }
    });
});



$(".faq-box-list > a").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
            .siblings(".content")
            .slideUp(200);
    } else {
        $(".faq-box-list > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
            .siblings(".content")
            .slideDown(200);
    }
});

$('.team-card').hover(function() {
    $(this).siblings('.team-card').removeClass('hover');
    $(this).addClass("hover", 300);
}, function() {
    // $(this).removeClass("hover", 300);
});


$(document).ready(function() {
 
  //detect mobile screen size an create a var
  width = $( window ).width();

// conditional  to hide responsive Menu name or button on >900px screens
  if ($(window).width()>991) {
         
}
  
  // conditional to hide entire menu and show mobile menu

  if(width <= 991){
    
    $('.team-main').owlCarousel({
            loop:true,
            margin:15,
            center: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
            }
        });
    }
  
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});