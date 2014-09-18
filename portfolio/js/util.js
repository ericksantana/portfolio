 $(document).ready(function(){
 	
 	//Cria animação de ancora.
	$.fn.ancora = function(){
		$('html,body').animate({scrollTop:$(this).offset().top});
	}

	//quem tiver # no href, tem animação.
	$(function(){
	    $('a[href^=#]').click(function(){
	        $($(this).attr('href')).ancora();
	        return false;
	    })
	});

 	$(".menu li a").click(function() {
 		$(".menu li a").removeClass('active');
 		$(this).addClass('active');
 	});

 	$(".categoria").click(function() {
 		$(".categoria").removeClass('marcado');
 		$(this).addClass('marcado');
 	});

 	$('.desenvolvimento').click(function(){
 		$('.dev').show();
 		$('.part').hide();
 	});
 	$('.participacao').click(function(){
 		$('.part').show();
 		$('.dev').hide();
 	});
 });


