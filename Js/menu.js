$(function(){		
		$(window).scroll(function(){
			var menu = $("#menu")
			if($(this).scrollTop() > 100){
				menu.removeClass('normal').addClass('tetap');
			} else {
				menu.removeClass('tetap').addClass('normal');
			}
		});

});