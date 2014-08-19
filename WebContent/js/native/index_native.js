"use strict";//使用strict mode(嚴格模式)
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

addLoadEvent(checkCookies);
//addLoadEvent(showMoreMenu);
addLoadEvent(addMenuListeners);
addLoadEvent(detectAndFit);
addLoadEvent(addCotentListener);
addLoadEvent(addDragListeners);
addLoadEvent(addTouchListeners);
addLoadEvent(addHistoryListener);

addLoadEvent(setSignInAndUp);
addLoadEvent(setFunds);

addLoadEvent(setHompage);



//確定有沒有cookie裡面有沒有token,有就進入login模式
function checkCookies(){
	//Cookies.setCookie("token", "123456789", COOKIE_EXPIRE);
	//Cookies.setCookie("username", "abcdefghij", COOKIE_EXPIRE);
	//Cookies.setCookie("balance", "98.7654321", COOKIE_EXPIRE);
	//Cookies.delAllCookies();
	if(Cookies.getCookie("token") !== false){
		setLoginStatus();
	}
}
function setLoginStatus(){
	if(Cookies.getCookie("username") !== false){
		[].forEach.call(document.querySelectorAll('.js-username'), function (el) {
			el.innerHTML = Cookies.getCookie("username");
		});
	}
	
	if(Cookies.getCookie("balance") !== false){
		[].forEach.call(document.querySelectorAll('.js-balance'), function (el) {
			el.innerHTML = Cookies.getCookie("balance");
		});
	}
	
	[].forEach.call(document.querySelectorAll('.js-is-logout'), function (el) {
		el.style.display = "none";
	});
	
	[].forEach.call(document.querySelectorAll('.js-is-login'), function (el) {
		el.style.display = "block";
	});
	
	[].forEach.call(document.querySelectorAll('.mbtn-li-logout'), function (el) {
		el.style.display = "none";
	});
	
	[].forEach.call(document.querySelectorAll('.mbtn-m-li-hide'), function (el) {
		el.style.display = "block";
	});
}

/* 
 * 改變#content的內容
 */
function addCotentListener(){
	var joinFreeBtn = document.getElementsByClassName('join-free-btn'); 
	var loginBtn = document.getElementsByClassName('login-btn');
	document.getElementById('content-drag').style.height = document.getElementById('member').offsetHeight + "px";
	//點擊#logo
	document.getElementById('logo').addEventListener('click', function() {
		changeContentWrap("member");
	}, false);
	//點擊.join-free-btn
	for(var i in joinFreeBtn){
		if(isNaN(i)){ break; }
		joinFreeBtn[i].addEventListener('click', function() {
			changeContentWrap("signup");	
		}, false);
	}	
	//點擊.login-btn
	for(var i in loginBtn){
		if(isNaN(i)){ break; }
		loginBtn[i].addEventListener('click', function() {
			changeContentWrap("login");	
		}, false);
	}
	
	//點擊#js-check-spam-btn
	document.querySelector('#js-check-spam-btn').addEventListener('click', function() {
		changeContentWrap("check-spam");
	}, false);
	//點擊#js-is-right-mail-btn
	document.querySelector('#js-is-right-mail-btn').addEventListener('click', function() {
		changeContentWrap("new-mail");
	}, false);
}

function changeContentWrap(targetWrapID, backFlag){
	var contentWrap = document.getElementsByClassName('content-wrap');
	
	for(var j in contentWrap){
		if(isNaN(j)){ break; }
		contentWrap[j].style.display = "none";
	}

	document.getElementById(targetWrapID).style.display = "block";
	//moveToTheTop();
	document.getElementById('content-drag').style.height = document.getElementById(targetWrapID).offsetHeight + "px";
	
	if(!backFlag){
		history.pushState({ page: targetWrapID }, "", "#"+targetWrapID);
	}
}

function moveToTheTop(){
	document.getElementById('content-drag').style.top = HEADER_H+"px";
}

function addHistoryListener(){
	history.replaceState({ page: "member" }, "", "#member");
	window.addEventListener("hashchange", function(e){
		var hash = location.hash.substr(1);
		//var currentState = history.state.page;
		if(hash != ""){
			changeContentWrap(hash, true);
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
				if(mbtnMoreLi[i].id === "js-mbtn-logout"){
					if(Cookies.getCookie("token") !== false){
						removeClass('mbtn-m-li-hide', mbtnMoreLi[i]);
					}
				}else{
					removeClass('mbtn-m-li-hide', mbtnMoreLi[i]);
				}
			}

		}
		
	}, false);
}
/*點擊menu-btn彈出彈回選單*/
function addMenuListeners(){
	//alert("ready");
	var userWrap = document.getElementById('user-wrap');
	
	var navBtn = document.getElementById('js-nav-btn-wrap');
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
				document.getElementById('js-nav-btn-wrap').style.cssFloat = "left";
				document.getElementById('logo').style.cssFloat = "";
				
				if(Cookies.getCookie("token") === true){
					userWrap.style.display = "block";
				}
			}else if(isMenu){
				content.style.left = MENU_W+"px";
				document.getElementById('js-nav-btn-wrap').style.cssFloat = "right";
				document.getElementById('logo').style.cssFloat = "left";
				
				if(Cookies.getCookie("token") === true){
					userWrap.style.display = "none";
				}
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
	var userWrap = document.getElementById('user-wrap');
	var signinBar640 = document.getElementById('signin-bar-640');
	var signinBar1024 = document.getElementById('signin-bar-1024');
	var loginSufWrap = document.getElementById('login-suf-wrap');
	//var banner = document.getElementById('banner');
	//var psychiclist = document.getElementById('psychic-list');
	var jsUser1024 = document.querySelectorAll('.js-user-1024');
	
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
		if(Cookies.getCookie("token") === false){
			signinBar640.style.display = "block";
			userWrap.style.display = "none";
			
			[].forEach.call(document.querySelectorAll('.mbtn-li-logout'), function (el) {
				el.style.display = "block";
			});
		}else{
			var logoR = parseInt(document.getElementById('logo').offsetLeft) + parseInt(document.getElementById('logo').offsetWidth);
			
			if(userWrap.offsetLeft < logoR){
				var remain = CLIENT_W - logoR - parseInt(document.getElementById('js-user-fund-img').offsetWidth);
				document.getElementById('js-user-a').style.width = remain + "px";
			}
		}
		signinBar1024.style.display = "none";
		//banner.style.top = "85px";
		//psychiclist.style.top = "235px";
		loginSufWrap.style.display = "block";
		
		[].forEach.call(jsUser1024, function (el) {
			el.style.display = "none";
		});
	}else{
		MODE = "big";
		//console.log("big");
		signinBar640.style.display = "none";
		if(Cookies.getCookie("token") === false){
			signinBar1024.style.display = "block";
			userWrap.style.display = "none";
		}else{
			document.getElementById('js-user-a').style.width = "";
		}
		
		[].forEach.call(document.querySelectorAll('.mbtn-li-logout'), function (el) {
			el.style.display = "none";
		});
		//banner.style.top = "0";
		//psychiclist.style.top = "150px";
		loginSufWrap.style.display = "none";
		
		[].forEach.call(jsUser1024, function (el) {
			el.style.display = "inline";
		});
	}
	/*
	var bannerImg = document.getElementsByClassName('banner-img')[0]; //HTML5開始支援 getElementsByClassName()方法
	//var bannerImg = getElementsByClass('banner-img')[0];		
	bannerImg.width = (bannerImg.width < (CLIENT_W - BANNER_SPARE_2W) ? bannerImg.width : (CLIENT_W - BANNER_SPARE_2W));
	//var BANNER_H = bannerImg.height;
	//var psychicImg = document.getElementsByClassName('psychic-img')[0];
	//psychicImg.width = CLIENT_W/(psychicImg.width);
	*/
	[].forEach.call(document.querySelectorAll('.banner-img'), function (el) {
		el.width = (el.width < (CLIENT_W - BANNER_SPARE_2W) ? el.width : (CLIENT_W - BANNER_SPARE_2W));
	});
	
	//var dragH = CLIENT_H - HEADER_H;
	
	document.getElementById('menu').style.height = CLIENT_H + "px";
	document.getElementById('content').style.height = CLIENT_H + "px";
	//document.getElementById('content-drag').style.height = dragH + "px";
	
	var psychiclistL = (CLIENT_W % (PSYCHIC_IMG_W + PSYCHIC_SPARE_W*2))/2;
	document.getElementById('psychic-list').style.left = psychiclistL + "px";
}
/* 
 * 為menu及content添加drag事件(touch取代mouse)
 */
function addTouchListeners(){
	var oldY, newY;
	var diff, top;
	
	document.getElementById('menu-drag').addEventListener('touchstart', touchStart, false);
	document.getElementById('content-drag').addEventListener('touchstart', touchStart, false);
	window.addEventListener('touchend', touchEnd, false);

	function touchEnd(e){	    
		//console.log("touchend");
		
		if(Number(window.drag.style.top.replace("px", "")) > HEADER_H){
			window.drag.style.top = HEADER_H + 'px';
	    }else if(Number(window.drag.style.top.replace("px", "")) < diff){
	    	diff = (diff > HEADER_H) ? HEADER_H : diff;
	    	window.drag.style.top = diff + 'px';
	    }
		
		window.removeEventListener('touchmove', dragDiv, true);
	}

	function touchStart(e){
		//console.log("touchstart"+", clientY:"+e.touches[0].clientY+", pageY:"+e.touches[0].pageY+", screenY:"+e.touches[0].screenY);
		
		oldY = e.touches[0].screenY;

		window.addEventListener('touchmove', dragDiv, true);
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
		//console.log("touchmove"+", clientY:"+e.touches[0].clientY+", pageY:"+e.touches[0].pageY+", screenY:"+e.touches[0].screenY);
		
		stopDefault(e);

		newY = e.touches[0].screenY;
		
	    var offset = newY - oldY + top;
	    diff = Number(window.drop.style.height.replace("px", "")) - Number(window.drag.style.height.replace("px", ""));
	    diff = diff < HEADER_H ? diff : HEADER_H;

	    if(offset < (HEADER_H + Drag_SPACE_H) && offset > (diff - Drag_SPACE_H)){
	    	window.drag.style.top = offset + 'px';
	    }
	}
	
	function stopDefault(e){ 
		if(e && e.preventDefault){ 
			e.preventDefault();  
		}else{ 
	        window.event.returnValue = false; 
		}   
	    return false; 
	} 
}
/* 
 * 為menu及content添加drage事件
 */
function addDragListeners(){
	var oldY, newY, oldX, newX;
	var diffX, diff, top;
	
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
		if(window.drag !== undefined){
			if(window.drag.id === "menu-drag" || "content-drag"){
				if(Number(window.drag.style.top.replace("px", "")) > HEADER_H){
					window.drag.style.top = HEADER_H + 'px';
			    }else if(Number(window.drag.style.top.replace("px", "")) < diff){
			    	diff = (diff > HEADER_H) ? HEADER_H : diff;
			    	window.drag.style.top = diff + 'px';
			    }
		    }
		}
		window.removeEventListener('mousemove', dragDiv, true);
	}

	function mouseDown(e){
		oldY = e.screenY;

		if(e.currentTarget.id === "menu-drag"){ 	
			//抓取#menu-list及#menu-footer來設定#menu-drag的高度
			var menuDragH = document.getElementById('menu-list').offsetHeight + document.getElementById('menu-footer').offsetHeight;
			document.getElementById('menu-drag').style.height = menuDragH + "px";
			
	        window.drag = document.getElementById("menu-drag");
	        window.drop = document.getElementById("menu");
	        
	        window.addEventListener('mousemove', dragDiv, true);
	        top = Number(window.drag.style.top.replace("px", ""));
		}else if(e.currentTarget.id === "content-drag"){
			
			window.drag = document.getElementById("content-drag");
	        window.drop = document.getElementById("content");
	        
	        window.addEventListener('mousemove', dragDiv, true);
	        top = Number(window.drag.style.top.replace("px", ""));
	    } 
	}

	function dragDiv(e){
		stopDefault(e);
		newY = e.screenY;
		
	    var offset = newY - oldY + top;
	    diff = Number(window.drop.style.height.replace("px", "")) - Number(window.drag.style.height.replace("px", ""));
	    diff = diff < HEADER_H ? diff : HEADER_H;
	    //console.log(newY+", "+oldY);
	    if(offset < (HEADER_H + Drag_SPACE_H) && offset > (diff - Drag_SPACE_H)){
	    	window.drag.style.top = offset + 'px';
	    }
	}
	
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
	document.getElementById('js-nav-btn-wrap').style.cssFloat = "left";
	
	detectAndFit();
});




