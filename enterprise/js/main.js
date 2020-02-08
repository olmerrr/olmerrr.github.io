$(function(){

  $('.slider__inner,.news__slider-inner').slick({
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    infinite:false,
  });
$('select').styler();
$('.header__btn-menu').on('click', function(){
  $('.menu ul').slideToggle();
});
jQuery( document ).ready(function() {
  jQuery('#scrollup').mouseover( function(){
    jQuery( this ).animate({opacity: 0.65},100);
  }).mouseout( function(){
    jQuery( this ).animate({opacity: 1},100);
  }).click( function(){
    //window.scroll(0 ,0);  - резкая прокрутка
        jQuery('body,html').animate({scrollTop:0},800);
    return false;
  });

  jQuery(window).scroll(function(){
    if ( jQuery(document).scrollTop() > 0 ) {
      jQuery('#scrollup').fadeIn('fast');
    } else {
      jQuery('#scrollup').fadeOut('fast');
    }
  });
});


});

