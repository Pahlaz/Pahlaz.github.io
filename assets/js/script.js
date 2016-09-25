$(function(){
	var windowWidth = window.innerWidth;
	
	if(windowWidth > 600){
		$('nav ul').show();
	}

	// Menu Button
	$('.toggle-btn').on('click', function(){
		$(this).toggleClass('onclick');
		$('nav ul').toggleClass('visible');
	});

	$(window).scroll(function(){
		var yscroll = $(window).scrollTop();
		
		// Landing Elements
		if(yscroll > $('.dev-container').offset().top - ($(window).height() / 1.4)) {

		    $('.dev-container .item').each(function(i){
		      setTimeout(function(){
		        $('.dev-container .item').eq(i).animate({
					'opacity': '1'
				}, 500);
		      }, (700 * (Math.exp(i * 0.14))) - 700);
		    });
		    
		}
	});

	// Image Slider
	var leftarrow = $('.slider .left');
	var rightarrow = $('.slider .right');

	leftarrow.click(function(){
	    var left = $(this).siblings('.dev-container').css('margin-left').replace('px', '');
	    
	    left = parseInt(left)+310;
	    if(left <=  50)
	    	$('.dev-container').animate({'margin-left': left},500);
	});
	rightarrow.click(function(){
		var total = $(this).siblings('.dev-container').children('.item').length;
	    var left = $(this).siblings('.dev-container').css('margin-left').replace('px', '') - 310;
	    
	    if(left >= -(total-4)*310)
	    	$('.dev-container').animate({'margin-left': left},500);
	});



});