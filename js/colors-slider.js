$(function() {
  $('.samples__colors__slider').on('init', function(event, slick) {
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.colors__prev'),
    nextArrow: $('.colors__next'),
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
});
