	
	
$(document).ready(function(){
	$('.photoButton').on('click', function(){
		$(this).fadeOut("slow","swing");
		$('.allAfterButton').fadeIn("slow");
	});
	$('label h3').hover(function(){
		$(this).css({"font-size":"2em"});
	},function(){
		$(this).css({"font-size":"1.5em", "height":"19px"});
	});
	$('.hob').hover(function(){
		$('.cookWord').css({'display':'block'});
	},function(){
		$('.cookWord').css({'display':'none'});
	});
});
