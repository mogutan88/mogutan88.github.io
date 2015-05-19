function init(){
	tab();
	more();
	selectMenu();
}

////tab
//	$(function() {
//		$('#ui-tab > ul').tabs();
//	});


////もっと見る
//function more(){
//	$('.more').click(function(e){
//		$(this).parent().find('li').fadeIn();
//		$(this).hide();
//		$(this).next();
//		
//		e.preventDefault();			
//	});
//}
//もっと見る
function more(){
	$('.more').click(function(e){
		$(this).parent().find('li').fadeIn();
		$(this).hide();
		e.preventDefault();			
	});
}


//kankeinai
function selectMenu(){
	$('#select_menu').change(function(){
		location.href = '#'+$(this).val();
	});
}

$(function(){
	init();
});