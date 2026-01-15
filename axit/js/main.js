// Burger menu
$(function(){
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });
});

// Up button
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

// Footer current year
$(function() {
  const currentYear = new Date().getFullYear();
  $('#current-year').text(currentYear); // Вставляем в span с id="current-year"
});
