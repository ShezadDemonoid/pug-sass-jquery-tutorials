$('.img-hover').hover(function() {
	$(this).addClass('hover').find('.search-img').show();
	},
	function () {
		$(this).removeClass('hover').find('.search-img').hide();;
	});



