/**
 * 
 */
var MODE = "small";

var CLIENT_W = document.documentElement.clientWidth;
var CLIENT_H = document.documentElement.clientHeight;
//var screenW = window.screen.width;
//var availW = window.screen.availWidth;
//alert("CLIENT_W: "+ CLIENT_W +", screenW: "+ screenW +", availW: "+ availW);

var MENU_W = 480;
var HEADER_H = 70;
var BANNER_SPARE_2W = 40;
var PSYCHIC_IMG_W = 200;
var PSYCHIC_SPARE_W = 10;
var Drag_SPACE_H = 250;

/** http://www.ewdna.com/2012/03/javascriptfunctionwindowonload.html
 *  http://www.jaceju.net/blog/archives/160/
 *  將多個function加到window.onload
 */
function addLoadEvent(newFunction){    
	var oldonload = window.onload;
    
	if(typeof window.onload != 'function'){  
		window.onload = newFunction;
	}else{
		window.onload = function() {      
			if(oldonload){ oldonload(); }
			newFunction();    
		};    
	}
}

addLoadEvent(showMoreMenu);
addLoadEvent(addMenuListeners);
addLoadEvent(detectAndFit);
addLoadEvent(chengeCotent);
addLoadEvent(addDragListeners);
addLoadEvent(submitSignup);
addLoadEvent(submitLogin);

addLoadEvent(delegatePsychic);
addLoadEvent(getPsychicList(1));

function submitSignup(){
	document.getElementById('signup-submit').addEventListener('click', function() {
		var suUsername = document.getElementById('js-signup-un');
		var suPassword = document.getElementById('js-signup-pw');
		var suCoPassword = document.getElementById('js-signup-cpw');
		var suEmail = document.getElementById('js-signup-email');

		if(!suUsername.value && !suPassword.value && !suCoPassword.value && !suEmail.value){
			document.getElementById('js-signup-zero-fill').style.display = "block";
		}
		
	}, false);
}
function submitLogin(){
	document.getElementById('login-submit').addEventListener('click', function() {
		var liUsername = document.getElementById('js-login-un');
		var liPassword = document.getElementById('js-login-pw');

		if(!liUsername.value && !liPassword.value){
			document.getElementById('js-login-zero-fill').style.display = "block";
		}
		
	}, false);
}
/* 
 * 點擊Menu上的More秀出更多menuBtn 
 */
function showMoreMenu(){
	var mbtnMore = document.getElementById('mbtn-more');
	mbtnMore.addEventListener('click', function() {
		var mbtnMoreLi = document.getElementsByClassName("js-mbtn-m-li");
	
		for(var i in mbtnMoreLi){
			if(isNaN(i)){ break; }

			if(mbtnMoreLi[i].className.indexOf('mbtn-m-li-hide') === -1){
				addClass('mbtn-m-li-hide', mbtnMoreLi[i]);
			}else{
				removeClass('mbtn-m-li-hide', mbtnMoreLi[i]);
			}

		}
		
	}, false);
}
/* 
 * 改變#content的內容
 */
function chengeCotent(){
	var joinFreeBtn = document.getElementsByClassName('join-free-btn'); 
	var loginBtn = document.getElementsByClassName('login-btn');
	document.getElementById('content-drag').style.height = document.getElementById('member').offsetHeight + "px";
	//點擊#logo
	document.getElementById('logo').addEventListener('click', function() {
		hideContentWrapClass();
		
		document.getElementById('member').style.display = "block";
		setContentTopAndHeight(document.getElementById('member'));
		
	}, false);
	//點擊.join-free-btn
	for(var i in joinFreeBtn){
		if(isNaN(i)){ break; }
		joinFreeBtn[i].addEventListener('click', function() {
	
			hideContentWrapClass();
			
			document.getElementById('signup-wrap').style.display = "block";
			setContentTopAndHeight(document.getElementById('signup-wrap'));
			
		}, false);
	}	
	//點擊.login-btn
	for(var i in loginBtn){
		if(isNaN(i)){ break; }
		loginBtn[i].addEventListener('click', function() {
	
			hideContentWrapClass();
			
			document.getElementById('login-wrap').style.display = "block";
			setContentTopAndHeight(document.getElementById('login-wrap'));
			
		}, false);
	}
	//把所有帶有content-wrap屬性的區塊隱藏
	function hideContentWrapClass(){
		var contentWrap = document.getElementsByClassName('content-wrap');
		
		for(var j in contentWrap){
			if(isNaN(j)){ break; }
			contentWrap[j].style.display = "none";
		}
	}
	//設定#content的top, height
	function setContentTopAndHeight(contentElement){
		document.getElementById('content-drag').style.top = HEADER_H+"px";
		document.getElementById('content-drag').style.height = contentElement.offsetHeight + "px";
	}
}

/*點擊menu-btn彈出彈回選單*/
function addMenuListeners(){
	//alert("ready");
	var navBtn = document.getElementById('nav-btn-wrap');
	var content = document.getElementById('content');
	var menu = document.getElementById('menu');
	var menuDrag = document.getElementById('menu-drag');
	
	var logoBtn = document.getElementById('logo');
	var joinFreeBtn = document.getElementsByClassName('join-free-btn'); 
	var loginBtn = document.getElementsByClassName('login-btn');
	
	/*menuBtn.addEventListener('click', function() {
		popMenuEvent(true);
	}, false);
	
	content.addEventListener('click', function() {
		popMenuEvent();
	}, false);
	
	logoBtn.addEventListener('click', function() {
		popMenuEvent();
	}, false);
	
	for(var i in joinFreeBtn){
		if(isNaN(i)){ break; }
		joinFreeBtn[i].addEventListener('click', function() {
	
			popMenuEvent();
			
		}, false);
	}	
	
	for(var i in loginBtn){
		if(isNaN(i)){ break; }
		loginBtn[i].addEventListener('click', function() {
	
			popMenuEvent();
			
		}, false);
	}*/
	addMenuEventListener(navBtn, false, true);
	addMenuEventListener(content, false, false);
	addMenuEventListener(logoBtn, false, false);
	addMenuEventListener(joinFreeBtn, true, false);
	addMenuEventListener(loginBtn, true, false);
	
	function addMenuEventListener(obj, byClass, isMenu){
		
		if(!byClass){
			obj.addEventListener('click', function() {
				popMenuEvent(isMenu);
			}, false);
		}else{
			for(var i in obj){
				if(isNaN(i)){ break; }
				obj[i].addEventListener('click', function() {
					popMenuEvent();
				}, false);
			}
		}
		
	}
	
	function popMenuEvent(isMenu){
		if(MODE === "small"){
			if(content.style.left === MENU_W+"px"){
				content.style.left = "0px";
				menuDrag.style.top = HEADER_H+"px";
				document.getElementById('nav-btn-wrap').style.cssFloat = "left";
			}else if(isMenu){
				content.style.left = MENU_W+"px";
				document.getElementById('nav-btn-wrap').style.cssFloat = "right";
			}
			
			
			
		}else{
			if(menu.style.zIndex !== "9" && isMenu){
				menu.style.zIndex = "9";
			}else{
				menu.style.zIndex = "-1";
				menuDrag.style.top = HEADER_H+"px";
			}
		}
	}
	
}
/*偵測螢幕寬度改變各個物件大小*/
function detectAndFit(){
	var signinBar640 = document.getElementById('signin-bar-640');
	var signinBar1024 = document.getElementById('signin-bar-1024');
	var loginSufWrap = document.getElementById('login-suf-wrap');
	//var banner = document.getElementById('banner');
	//var psychiclist = document.getElementById('psychic-list');
	
	//螢幕改變大小時, 抓取body的偽類:after中的content, 判斷螢幕屬於大螢幕還是小螢幕 
	var screenType = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
    //console.log(CLIENT_W);
	/*getComputedStyle返回的content值在某些瀏覽器下是帶有引號的，
	 * 因此不能使用===直接匹配，
	 * 可以使用簡單正則test方法（demo頁面的方法），
	 * 或是索引查找indexOf方法，
	 * 或是字符分隔split方法等。
	 */
	if (/small/.test(screenType) || CLIENT_W < 1024) {
		MODE = "small";
		//console.log("small");
		signinBar640.style.display = "block";
		signinBar1024.style.display = "none";
		//banner.style.top = "85px";
		//psychiclist.style.top = "235px";
		loginSufWrap.style.display = "block";
	}else{
		MODE = "big";
		//console.log("big");
		signinBar640.style.display = "none";
		signinBar1024.style.display = "block";
		//banner.style.top = "0";
		//psychiclist.style.top = "150px";
		loginSufWrap.style.display = "none";
	}
	
	var bannerImg = document.getElementsByClassName('banner-img')[0]; //HTML5開始支援 getElementsByClassName()方法
	//var bannerImg = getElementsByClass('banner-img')[0];		
	bannerImg.width = (bannerImg.width < (CLIENT_W - BANNER_SPARE_2W) ? bannerImg.width : (CLIENT_W - BANNER_SPARE_2W));

	//var psychicImg = document.getElementsByClassName('psychic-img')[0];
	//psychicImg.width = CLIENT_W/(psychicImg.width);
	
	//var dragH = CLIENT_H - HEADER_H;
	
	document.getElementById('menu').style.height = CLIENT_H + "px";
	document.getElementById('content').style.height = CLIENT_H + "px";
	//document.getElementById('content-drag').style.height = dragH + "px";
	
	var psychiclistH = (CLIENT_W % (PSYCHIC_IMG_W + PSYCHIC_SPARE_W*2))/2 - PSYCHIC_SPARE_W;
	document.getElementById('psychic-list').style.left = psychiclistH + "px";
}
/* 
 * 為menu及content添加drage事件
 */
function addDragListeners(){
	var oldY, newY;
	var diff, top;
	
	document.getElementById('menu-drag').addEventListener('mousedown', mouseDown, false);
	document.getElementById('content-drag').addEventListener('mousedown', mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);
	
    /*document.getElementById('menu-drag').addEventListener('touchstart', mouseDown, false);
    document.getElementById('content-drag').addEventListener('touchstart', mouseDown, false);
    window.addEventListener('touchend', mouseUp, false);*/

	function mouseUp(e){
	    /*//if(e.currentTarget.id === "menu-drag"){
	        window.removeEventListener('mousemove', dragMenu, true);
	        //window.removeEventListener('touchmove', dragMenu, true);
	    //}else if(e.currentTarget.id === "content-drag"){
	    	window.removeEventListener('mousemove', dragContent, true);
	    	//window.removeEventListener('touchmove', dragContent, true);
	    //}*/	    
	    
		if(Number(window.drag.style.top.replace("px", "")) > HEADER_H){
			window.drag.style.top = HEADER_H + 'px';
	    }else if(Number(window.drag.style.top.replace("px", "")) < diff){
	    	diff = (diff > HEADER_H) ? HEADER_H : diff;
	    	window.drag.style.top = diff + 'px';
	    }
		
		window.removeEventListener('mousemove', dragDiv, true);
	}

	function mouseDown(e){
		oldY = e.screenY;
		/*if(e.currentTarget.id === "menu-drag"){ //currentTarget為listener綁定對象
	        window.addEventListener('mousemove', dragMenu, true);
	        //window.addEventListener('touchmove', dragMenu, true);
		}else if(e.target.id === "content-drag" || findParents(e.target, "content-drag")){ //target為點擊觸發對象
	        window.addEventListener('mousemove', dragContent, true);
	        //window.addEventListener('touchmove', dragContent, true);
	    }*/
		
		window.addEventListener('mousemove', dragDiv, true);
        //window.addEventListener('touchmove', dragContent, true);
		if(e.currentTarget.id === "menu-drag"){
			//抓取#menu-list及#menu-footer來設定#menu-drag的高度
			var menuDragH = document.getElementById('menu-list').offsetHeight + document.getElementById('menu-footer').offsetHeight;
			document.getElementById('menu-drag').style.height = menuDragH + "px";
			
	        window.drag = document.getElementById("menu-drag");
	        window.drop = document.getElementById("menu");
		}else if(e.currentTarget.id === "content-drag"){
			window.drag = document.getElementById("content-drag");
	        window.drop = document.getElementById("content");
	    }
		top = Number(window.drag.style.top.replace("px", ""));
	}

	function dragDiv(e){
		stopDefault(e);

		newY = e.screenY;
		
	    var offset = newY - oldY + top;
	    diff = Number(window.drop.style.height.replace("px", "")) - Number(window.drag.style.height.replace("px", ""));
	    diff = diff < HEADER_H ? diff : HEADER_H;

	    if(offset < (HEADER_H + Drag_SPACE_H) && offset > (diff - Drag_SPACE_H)){
	    	window.drag.style.top = offset + 'px';
	    }
	}
	
	/*function dragMenu(e){
		newY = e.screenY;
		
	    var menuDrag = document.getElementById('menu-drag');
	    var offset = newY - oldY + HEADER_H;
	    var diff = Number(document.getElementById('menu').style.height.replace("px", "")) - Number(document.getElementById('menu-drag').style.height.replace("px", ""));
	    if(offset < HEADER_H && offset > diff){
	    	menuDrag.style.top = offset + 'px';
	    }
	}

	function dragContent(e){
		newY = e.screenY;
		console.log(e.screenY);
	    var contentDrag = document.getElementById('content-drag');

	    var offset = newY - oldY + HEADER_H;
	    var diff = Number(document.getElementById('content').style.height.replace("px", "")) - Number(document.getElementById('content-drag').style.height.replace("px", ""));
	    if(offset < HEADER_H && offset > diff){
	    	contentDrag.style.top = offset + 'px';
	    }
	}*/
	
	function stopDefault(e){ 
		if(e && e.preventDefault){ 
			e.preventDefault();  
		}else{ 
	        window.event.returnValue = false; 
		}   
	    return false; 
	} 
}

/*window.onresize = function resizeWindow(){
	//螢幕改變大小時, 抓取body的偽類:after中的content, 判斷螢幕屬於大螢幕還是小螢幕 
	var screenType = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
	if (/small/.test(screenType)) {
		alert("small");
	}else{
		alert("big");
	}
};*/
window.addEventListener('resize', function() {
	//console.log("resize");
	CLIENT_W = document.documentElement.clientWidth;
	CLIENT_H = document.documentElement.clientHeight;
	
	document.getElementById('menu').style.zIndex = "-1";
	document.getElementById('content').style.left = "0px";
	document.getElementById('nav-btn-wrap').style.cssFloat = "left";
	
	detectAndFit();
});




