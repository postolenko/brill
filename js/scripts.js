function getMarginBootmSlide() {
  $(".br_slider_2").each(function() {
    $(this).find(".br_slide_2").css({
      "margin-bottom" : "auto"
    });
    hArr = [];
    desc = $(this).find(".br_slide_2_descript");
    desc.each(function() {
      h = $(this).outerHeight();
      hArr.push(h);
    });
    maxHeight = Math.max.apply(null, hArr);
    $(this).find(".br_slide_2").css({
      "margin-bottom" : maxHeight + "px"
    });
  });
}
$(window).load(function() {
  getMarginBootmSlide();
});
$(window).resize(function() {
  getMarginBootmSlide();
});
$(document).ready(function() {
    if( $(".br_slider_1").length > 0 ) {
        $(".br_slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 3,
            responsive: [
                {
                  breakpoint: 1072,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 570,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }
    if( $(".br_slider_2").length > 0 ) {
      $(".br_slider_2").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 2,
          responsive: [
              {
                breakpoint: 1072,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 570,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    $(".br_slide_2").fancybox({
      afterShow: function() {
        // After the show-slide-animation has ended - play the vide in the current slide
        this.content.find('.fancybox-iframe').trigger('play')
        
        // Attach the ended callback to trigger the fancybox.next() once the video has ended.
        this.content.find('.fancybox-iframe').on('ended', function() {
          $.fancybox.next();
        });
      }
    });
});