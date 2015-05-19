// JavaScript Document
function showHide(targetID) { //functionの宣言。受けとったIDは変数targetIDに格納。
        if( document.getElementById(targetID)) { //指定のIDのついたオブジェクトがあったら処理する
                //指定されたIDのstyle.displayがnoneなら
                if( document.getElementById(targetID).style.display == "none") {
                    //blockに変更する
                    document.getElementById(targetID).style.display = "block";
                } else { //noneでなければ、つまりblockなら
                    //noneにする
                    document.getElementById(targetID).style.display = "none";
                }
        }
}


//table折り畳み
$(function(){
	$(".item_table_box").css("display","none");
	$(".item_table").on("click", function() {
//		$(".item_table_box").next().slideToggle();
		$(this).next().slideToggle();
    $(this).toggleClass("active");
		});
		});



// swiper	
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: '4',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: false
    });
