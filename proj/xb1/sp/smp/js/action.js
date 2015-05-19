function init(){
	tab();
	more();
	selectMenu();
}
function tab(){
	$('.tab_list a').click(function(e){
		$('.tab_list .active').removeClass('active');
		$(this).parent().addClass('active');
		
		$('.tab_content').each(function(){
			$(this).removeClass('active');
		});
		$(this.hash).addClass('active');
		
		e.preventDefault();
	});
}
function more(){
	$('.more').click(function(e){
		$(this).parent().find('li').fadeIn();
		$(this).hide();
		
		e.preventDefault();			
	});
}
function selectMenu(){
	$('#select_menu').change(function(){
		location.href = '#'+$(this).val();
	});
}

$(function(){
	init();
});
$(function(){
	$(".menu").css("display","none");
	$(".button-toggle").on("click", function() {
		$(".menu").slideToggle();
	});
});




$(function(){
	$("#box_list").css("display","none");
	$(".head_style01 p").on("click", function() {
		$("#box_list").slideToggle();
    $(this).toggleClass("active");
		});
		});
		


//パンくず

$(function(){


$('#pan_slider').bind({
                 
    'touchstart': function(e) {
        this.touchX = event.changedTouches[0].pageX;
        this.slideX = $(this).position().left;
    },

    'touchmove': function(e) {
        e.preventDefault();
        this.slideX = this.slideX - (this.touchX -  event.changedTouches[0].pageX );
        $(this).css({left:this.slideX});
        this.accel = (event.changedTouches[0].pageX - this.touchX) * 5;
        this.touchX = event.changedTouches[0].pageX;
    },

    'touchend': function(e) {
        this.slideX += this.accel
        $(this).animate({left : this.slideX },100,'linear');
        this.accel = 0;
        
        w = - ( $(this).width() - $(this).parent("#flame").width() );
        if (this.slideX > 0) {
        	this.slideX = 0;
        	$(this).animate({left:this.slideX},500);
        }
        if (this.slideX < w) {
        	this.slideX = w;
        	$(this).animate({left:this.slideX},500);
        }
    }
});

})

//横に流れるスライダー
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: '4',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: false
    });
	
