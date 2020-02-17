$(function () {

  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // dotsClass:'header-dots',
    // autoplay: true,
    speed: 1500,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          dots: false,
        }
      },
    ]

  });

  // $('.nav-box').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   dots: false,
  //   autoplay: true,

  // });


  $('.hamburger').on('click', function () {
    $('.header__inner').slideToggle();
  });

});

$(function () {

  $('.hamburger__slider').slick({
    centerMode: true,
    centerPadding: '5px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    initialSlide: 2,

    responsive: [
      {
        breakpoint: 1255,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          centerMode: false,
          centerPadding: false,


        }

      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          centerMode: false,
          centerPadding: false,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          centerPadding: false,
        }
      },

    ]


  });

});

$(function () {

  $('.nav__food-slider').slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    initialSlide: 3
  });

});