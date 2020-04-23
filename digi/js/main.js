$(function(){
  $('.top-slider').slick({
    dots: true,
    // infinite: false,
    // speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/arrow-next.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/arrow-prev.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
       
        }
      },
    
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});