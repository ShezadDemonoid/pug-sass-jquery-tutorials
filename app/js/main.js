$('.img-hover').hover(function() {
	$(this).addClass('hover').find('.search-img').show();
	},
	function () {
		$(this).removeClass('hover').find('.search-img').hide();;
	});


$(document).ready(function () {
  $('.js-header-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
