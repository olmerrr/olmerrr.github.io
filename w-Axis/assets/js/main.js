$(function(){

  $('.slider__inner').slick({
    responsive: [
      {
          breakpoint: 2048,
          settings: "unslick"
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
      }
  },
]
  });
$('select').styler();
window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    $('.slider__inner').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('.slider__inner').slick();
      sliderIsLive = true;
    }
  }
});
});