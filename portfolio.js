function parallax(){
	var scrollPos = $(this).scrollTop();
	//console.log(scrollPos);
	$('#parallax-front').css({
		'transform' : 'translate(0px, '+ -scrollPos/1.5 +'px)'
	});
	$('#parallax-front-mid').css({
		'transform' : 'translate(0px, '+ -scrollPos/2.2 +'px)'
	});
	$('#parallax-back-mid').css({
		'transform' : 'translate(0px, '+ -scrollPos/4.5 +'px)'
	});
	$('#parallax').css({
		'transform' : 'translate(0px, '+ -scrollPos/10 +'px)'
	});
}

$(document).ready(function(){
	parallax();
});

$(window).scroll(function(){
	parallax();
});