
		$(document).ready(function() {

			$('.menu_trigger').click(function() {
				$('nav ul').slideToggle(500);
			});
			$(window).resize(function() {
				if ($(window).width() > 768 ) {
					$('nav ul').removeAttr('style');
				}
			});
		});