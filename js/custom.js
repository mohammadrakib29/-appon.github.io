$(function(){
    // banner slider--------
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        speed:1000,
        dots:true,
        fade:true,
        // responsive: [
        //   {
        //     breakpoint: 1440,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false,
        //     }
        //   }
      

        // ]
      });

      // screenshot slider=========
      $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        dots:true,
        arrows:false,
      });
          
  //  ==========veno video plug in=========
      $('.venobox').venobox(); 
  // ===========feedback slider============
      $('.feed-slider-desc').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        centerPadding:false,
        asNavFor: '.feed-img-slider'
      });
      $('.feed-img-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feed-slider-desc',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
      

        ]
      });

      // ===========scroll nav bar slider============
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.navbar').addClass('nav-bg');
        }
        else {
            $('.navbar').removeClass('nav-bg');
        }
      });
      // scroll up--------------------------------------------
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 250){
          $(".top-to-up-scroll").fadeIn();
      }
      else {
          $(".top-to-up-scroll").fadeOut();
      }
  });
 //  animation scroll js-------------------------

    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 500);
                return false;
            }
        }
    });

  // ===========feedback slider============
  // ===========feedback slider============
      

})