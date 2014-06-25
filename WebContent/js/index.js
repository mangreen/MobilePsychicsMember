/**essential file
 * jquery-2.1.0.min.js
 * jquery-ui.js
 */
var MODE = "small";

var CLIENT_W = document.documentElement.clientWidth;
var CLIENT_H = document.documentElement.clientHeight;

var MENU_W = 480;
var HEADER_H = 70;
var BANNER_SPARE_2W = 40;
var PSYCHIC_IMG_W = 200;
var PSYCHIC_SPARE_W = 10;

$( document ).ready(function() {
    //console.log( "ready!" );
	
	addMenuListeners();
    detectAndFit();
    $("#content-drag").height($('#member').height());
    chengeCotent();
    setDraggable("menu-drag");
    setDraggable("content-drag");
    resizeWindow();
    showMoreMenu();
    
    getPsychicList();
});

function showMoreMenu(){
	$('#mbtn-more').click(function(){
		if($('.js-mbtn-m-li').hasClass('mbtn-m-li-hide')){
			$('.js-mbtn-m-li').removeClass('mbtn-m-li-hide');
		}else{
			$('.js-mbtn-m-li').addClass('mbtn-m-li-hide');
		}
	});
}

function chengeCotent(){
	$('#logo').click(function(){
		$('.content-wrap').hide();
		$('#member').show();
		$("#content-drag").height($('#member').height());
		$("#content-drag").css("top", HEADER_H+"px");
	});
	
	$('.join-free-btn').click(function(){
		$('.content-wrap').hide();
		$('#signup-wrap').show();
		$("#content-drag").height($('#signup-wrap').height());
		$("#content-drag").css("top", HEADER_H+"px");
	});
	
	$('.login-btn').click(function(){
		$('.content-wrap').hide();
		$('#login-wrap').show();
		$("#content-drag").height($('#login-wrap').height());
		$("#content-drag").css("top", HEADER_H+"px");
	});
}

function setDraggable(dragTarget){
	$("#"+dragTarget).draggable({
    	axis: "y",
    	start: function() {

    	},
    	drag: function() {
    		
    	},
    	stop: function() {
    		//console.log($(this).css("top"));
    		var top = Number($(this).css("top").replace("px", ""));
    		var height = Number($(this).css("height").replace("px", ""));
    		var pHeight = Number($(this).parent().css("height").replace("px", ""));
    		var diff = pHeight-height;

    		if(top > 70 ){
     			$(this).css("top", HEADER_H+"px");
     		}else if(top < diff ){
     			diff = (diff > 70) ? 70 : diff;
     			
     			$(this).css("top", diff+"px"); 
     		}
    	}
    });
}

function detectAndFit(){
	var signinBar640 = $('#signin-bar-640');
	var signinBar1024 = $('#signin-bar-1024');
	
	//螢幕改變大小時, 抓取body的偽類:after中的content, 判斷螢幕屬於大螢幕還是小螢幕 
	var screenType = window.getComputedStyle(document.body, ":after").getPropertyValue("content");

	if (/small/.test(screenType)  || CLIENT_W < 1024) {
		MODE = "small";
		//alert("small");
		signinBar640.css("display", "block");
		signinBar1024.css("display", "none");
		//banner.style.top = "85px";
		//psychiclist.style.top = "235px";
		$('#login-suf-wrap').show();
	}else{
		MODE = "big";
		//alert("big");
		signinBar640.css("display", "none");
		signinBar1024.css("display", "block");
		//banner.style.top = "0";
		//psychiclist.style.top = "150px";
		$('#login-suf-wrap').hide();
	}
	
	$("#content").height(CLIENT_H);
	//$("#content-drag").height(CLIENT_H - HEADER_H);
	//$("#content-drag").height($("#menu-list").height() > (CLIENT_H - HEADER_H) ? $("#menu-list").height() : (CLIENT_H - HEADER_H));
	
	$("#menu").height(CLIENT_H);
	//$("#menu-drag").height($("#menu-list").height());
	
	$('.banner-img')[0].width = ($('.banner-img')[0].width < (CLIENT_W - BANNER_SPARE_2W) ? $('.banner-img')[0].width : (CLIENT_W - BANNER_SPARE_2W));
	
	var psychiclistH = (CLIENT_W % (PSYCHIC_IMG_W + PSYCHIC_SPARE_W*2))/2 - PSYCHIC_SPARE_W;
	$('#psychic-list').css('left', psychiclistH + "px");
}

function addMenuListeners(){
	var content = $("#content");
	var menu = $("#menu");
	var menuDrag = $("#menu-drag");
	var navBtn = $("#nav-btn-wrap");
	var logoBtn = $("#logo");
	var joinFreeBtn = $(".join-free-btn");
	var loginBtn = $(".login-btn");
	
/*	$("#menu-btn").click(function() {
    	if(MODE === "small"){
	    	if(content.css("left") == MENU_W+"px"){
	    		content.css("left", "0");
	    		menuDrag.css("top", HEADER_H+"px");
	    	}else{
	    		content.css("left", MENU_W+"px");
	    	}
		}else{
			if(menu.css("z-index") !== "9"){
				menu.css("z-index", "9");
			}else{
				menu.css("z-index", "-1");
				menuDrag.css("top", HEADER_H+"px");
			}
		}    	
    });*/
    popMenuEvent(navBtn, true);
    popMenuEvent(content, false);
    popMenuEvent(logoBtn, false);
    popMenuEvent(joinFreeBtn, false);
    popMenuEvent(loginBtn, false);
    
	function popMenuEvent(obj, isMenu){
		obj.click(function() {
	    	
	    	if(MODE === "small"){
		    	if(content.css("left") == MENU_W+"px"){
		    		content.css("left", "0");
		    		menuDrag.css("top", HEADER_H+"px");
		    		
		    	}else if(isMenu){
		    		content.css("left", MENU_W+"px");
		    	}
			}else{
				if(menu.css("z-index") !== "9" && isMenu){
					menu.css("z-index", "9");
				}else{
					menu.css("z-index", "-1");
					menuDrag.css("top", HEADER_H+"px");
				}
			}    	
	    });
	}
}

function resizeWindow(){
	$(window).resize(function(){
		CLIENT_W = document.documentElement.clientWidth;
		CLIENT_H = document.documentElement.clientHeight;

		$("#menu").css("z-index", "-1");
		$("#content").css("left", "0");
		
		detectAndFit();
	});
}