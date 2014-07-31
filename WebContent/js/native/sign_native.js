"use strict";//使用strict mode(嚴格模式)
/**
 * 
 */
function setSignInAndUp(){
	setSingUiUx();
	submitSignup();
	submitLogin();
	OAuthByFB();
	updateEmail();
	resendActiveEmail();
	setLogout();
	forgotPassword();
}

function setLogout(){
	document.querySelector('#js-mbtn-logout').addEventListener('click', function(){
		Cookies.delAllCookies();
		window.location.reload();
	});
}

function backHomepage(){
	getViewerBalance();
	changeContentWrap('member');
	setLoginStatus();
}

function getViewerBalance(){
	if(Cookies.getCookie("token")){
		AjaxClass({
	        url: URL_APP+'get_viewer_balance', //請求地址
	        type: "POST", //請求方式
	        jsonp: 'callback',
	        //time: 10000, //超時參數設置
	        data: { 
				username: Cookies.getCookie("username"), 
				token: Cookies.getCookie("token")
			},
			success : function(data) { // 此處放成功後執行的代碼
	
				//if(data.result === true){
					Cookies.setCookie("balance", data.balance, COOKIE_EXPIRE);
					Cookies.setCookie("freecredit", data.freecredit, COOKIE_EXPIRE);
	
					[].forEach.call(document.querySelectorAll('.js-balance'), function (el) {
						el.innerHTML = data.balance;
					});
				//}else{
				//	alert(data.msg);
				//}					
	        },
	        fail : function(status) { // 此處放失敗後執行的代碼
	        	alert(ERROR_012);
	        }
	    });
	}else{
		alert("Please Login!");
		changeContentWrap("login");
	}
}

function setSingUiUx(){
	
	[].forEach.call(document.querySelectorAll('.regi-input'), function (el) {
		el.addEventListener('blur', function() {
			/*if(!el.value && el.className.indexOf("js-input-cpw") !== -1){
				querySiblings(el, "span")[1].style.display = "block";
			}*/
			if(el.id === "js-login-un"){
				if(!el.value){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_01;
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					querySiblings(el, "span")[1].style.display = "none";
				}
			}else if(el.className.indexOf("js-input-username") !== -1){
				if(!el.value){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_01;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(el.value.length < 4){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_05;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(el.value.length > 12){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_07;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(!Validate.chkAccount(el.value)){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_09;
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					AjaxClass({
				        url: URL_APP+'check_username', //請求地址
				        type: "POST", //請求方式
				        jsonp: 'callback',
				        //time: 10000, //超時參數設置
				        data: {
				        	username: el.value
						},
						success : function(data) { // 此處放成功後執行的代碼
							if(data.result === true){
								querySiblings(el, "span")[1].style.display = "none";
							}else{
								querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_13 + data.msg;
								querySiblings(el, "span")[1].style.display = "block";
							}					
				        },
				        fail : function(status) { // 此處放失敗後執行的代碼
				        	alert(ERROR_005);
				        }
				    });
				}
			}else if(el.className.indexOf("js-input-pw") !== -1){
				if(!el.value){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_02;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(el.value.length < 7){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_06;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(el.value.length > 16){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_08;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(!Validate.chkPassword(el.value)){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_09;
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					querySiblings(el, "span")[1].style.display = "none";
				}
			}else if(el.className.indexOf("js-input-cpw") !== -1){
				var pwdVal;
				if(el.id === "js-signup-cpw"){
					pwdVal = document.querySelector('#js-signup-pw').value;
				}else if(el.id === "js-sufb-cpw"){
					pwdVal = document.querySelector('#js-sufb-pw').value;
				}
				
				if(el.value !== pwdVal){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_11;
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					querySiblings(el, "span")[1].style.display = "none";
				}
			}else if(el.className.indexOf("js-input-email") !== -1){
				if(!el.value){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_03;
					querySiblings(el, "span")[1].style.display = "block";
				}else if(!Validate.isEmail(el.value)){
					querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_10;
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					querySiblings(el, "span")[1].style.display = "none";
				}
			}else if(el.className.indexOf("js-input-captcha") !== -1){
				if(!el.value){
					querySiblings(el, ".js-warn-captcha")[0].innerHTML = SIGN_ERROR_MSG_14;
					querySiblings(el, ".js-warn-captcha")[0].style.display = "block";
				}else{
					querySiblings(el, ".js-warn-captcha")[0].style.display = "none";
				}
			}else if(el.className.indexOf("js-input-account") !== -1){
				if(!el.value){
					querySiblings(el, ".js-warn-account")[0].innerHTML = SIGN_ERROR_MSG_16;
					querySiblings(el, ".js-warn-account")[0].style.display = "block";
				}else{
					querySiblings(el, ".js-warn-account")[0].style.display = "none";
				}
			}else{
				if(!el.value){
					querySiblings(el, "span")[1].style.display = "block";
				}else{
					querySiblings(el, "span")[1].style.display = "none";
				}
			}
		}, false);
	});
	
	[].forEach.call(document.querySelectorAll('.regi-select'), function (el) {
		el.addEventListener('blur', function() {
			if(!el.value){
				//querySiblings(el, "span")[1].innerHTML = SIGN_ERROR_MSG_04;
				querySiblings(el, "span")[1].style.display = "block";
			}else{
				querySiblings(el, "span")[1].style.display = "none";
			}
		}, false);
	});
	
	/*將從今年, 往前100年加到"#start_year", 提供選擇*/
	var thisYear = new Date().getFullYear();
	/*var oFragment = document.createDocumentFragment();
	for(var i=(thisYear-100); i<=thisYear; i++){
		var oOption = document.createElement("option");//創建元素<option>
		oOption.setAttribute("value", i);//設定value
        var oText=document.createTextNode(i);//設定文本內容
        oOption.appendChild(oText);//文本添加到元素中
        oFragment.appendChild(oOption);//將每个元素文本添加到文檔碎片中
     }
	//document.querySelectorAll('.birth-year').appendChild(oFragment);
	[].forEach.call(document.querySelectorAll('.birth-year'), function (el) {
		el.appendChild(oFragment);
		alert(oFragment);
	});*/
	var oFragment = '<option value=""></option>';
	for(var i=(thisYear-100); i<=(thisYear-18); i++){
        oFragment += '<option value="'+i+'">'+i+'</option>';
     }
	//document.querySelectorAll('.birth-year').appendChild(oFragment);
	[].forEach.call(document.querySelectorAll('.birth-year'), function (el) {
		el.innerHTML = oFragment;
	});
	
	var eFragment = '<option value=""></option>';
	for(var i=thisYear; i<=(thisYear+100); i++){
        eFragment += '<option value="'+i+'">'+i+'</option>';
     }
	//document.querySelectorAll('.birth-year').appendChild(oFragment);
	[].forEach.call(document.querySelectorAll('.expiry-year'), function (el) {
		el.innerHTML = eFragment;
	});
}

function submitSignup(){
	document.getElementById('signup-submit').addEventListener('click', function() {
		var suUsername = document.getElementById('js-signup-un');
		var suPassword = document.getElementById('js-signup-pw');
		var suCoPassword = document.getElementById('js-signup-cpw');
		var suEmail = document.getElementById('js-signup-email');
		
		var suYear = document.querySelector('#si-birth-year');
		var suMonth = document.querySelector('#si-birth-month');
		var suDay = document.querySelector('#si-birth-day');
		
		
		if(!suUsername.value || !suPassword.value || !suCoPassword.value || !suEmail.value || !suYear.value || !suMonth.value || !suDay.value){
			document.getElementById('js-signup-zero-fill').style.display = "block";
			moveToTheTop();
		}else{
			AjaxClass({
		        url: URL_APP+'sign_up', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: { 
					username: suUsername.value, 
					pwd1: suPassword.value,
					email: suEmail.value,
					birth: suYear.value+'-'+suMonth.value+'-'+suDay.value,
					get_daily_horo: 0, //'是否訂閱daily horoscope,0 or 1'
					get_news: 0 //'是否訂閱news,0 or 1'
				},
				success : function(data) { // 此處放成功後執行的代碼

					if(data.result === true){
						Cookies.delAllCookies();
						Cookies.setCookie("username", suUsername.value, COOKIE_EXPIRE);
						Cookies.setCookie("email", suEmail.value, COOKIE_EXPIRE);
						Cookies.setCookie("validate_hash", data.validate_hash, COOKIE_EXPIRE);
						
						setUsernameAndEmail(Cookies.getCookie("username"), Cookies.getCookie("email"));
						changeContentWrap("signup-success");

					}else{
						alert(data.msg);
					}					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_002);
		        }
		    });
		}
		
	}, false);
}

function submitLogin(){
	document.getElementById('login-submit').addEventListener('click', function() {
		var liUsername = document.getElementById('js-login-un');
		var liPassword = document.getElementById('js-login-pw');

		if(!liUsername.value || !liPassword.value){
			document.getElementById('js-login-zero-fill').style.display = "block";
			moveToTheTop();
		}else{
			AjaxClass({
		        url: URL_APP+'login', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: {
		        	username: liUsername.value,
		        	password: liPassword.value
				},
				success : function(data) { // 此處放成功後執行的代碼
					if(data.result === "success"){
						Cookies.delAllCookies();
						Cookies.setCookie("username", liUsername.value, COOKIE_EXPIRE);
						Cookies.setCookie("pwd1", liPassword.value, COOKIE_EXPIRE);
						Cookies.setCookie("token", data.token, COOKIE_EXPIRE);
						Cookies.setCookie("freecredit", data.freecredit, COOKIE_EXPIRE);
						
						backHomepage();
					}else{
						if(data.validate_hash !== undefined){
							Cookies.delAllCookies();
							Cookies.setCookie("username", liUsername.value, COOKIE_EXPIRE);
							Cookies.setCookie("email", data.email, COOKIE_EXPIRE);//TODO
							Cookies.setCookie("validate_hash", data.validate_hash, COOKIE_EXPIRE);
							
							setUsernameAndEmail(Cookies.getCookie("username"), Cookies.getCookie("email"));
							changeContentWrap("signup-success");
							
							alert(ERROR_008);
						}else{
							alert(ERROR_007);
						}
					}					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_003);
		        }
		    });
		}
		
	}, false);
}

function setUsernameAndEmail(username, email){
	[].forEach.call(document.querySelectorAll('.js-username'), function (el) {
		el.innerHTML = username;
	});
	[].forEach.call(document.querySelectorAll('.js-user-mail'), function (el) {
		el.innerHTML = email;
	});
}

function updateEmail(){
	document.getElementById('new-mail-submit').addEventListener('click', function() {
		var newEmail = document.getElementById('js-new-email');

		if(!newEmail.value){
			document.getElementById('js-new-mail-zero').style.display = "block";
			moveToTheTop();
		}else{
			AjaxClass({
		        url: URL_APP+'update_email', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: {
		        	username: Cookies.getCookie("username"),
		        	validate_hash: Cookies.getCookie("validate_hash"),
		        	email: newEmail.value
				},
				success : function(data) { // 此處放成功後執行的代碼
					if(data.result === true){
						Cookies.setCookie("email", newEmail.value, COOKIE_EXPIRE);
						
						changeContentWrap("signup-success");
						
						document.getElementById('js-mail-change-ok').style.display = "block";
						/*setTimeout(function(){
							document.getElementById('js-mail-change-ok').style.display = "none";
						}, FADE_SPEED);*/
						Animate.fadeOut(document.getElementById('js-mail-change-ok'), FADE_SPEED);
					}else{
						alert(data.msg);
					}					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_006);
		        }
		    });
		}
		
	}, false);
}

function OAuthByFB(){
	
	[].forEach.call(document.querySelectorAll('.js-fb-login'), function (el) {
		el.addEventListener('click', function() {
			
			loginFb(el.id);

		}, false);
	});

}
function loginWithFB(fbData){
	AjaxClass({
        url: URL_APP+'login', //請求地址
        type: "POST", //請求方式
        jsonp: 'callback',
        //time: 10000, //超時參數設置
        data: {
        	fbuserid: fbData.fbuserid
		},
		success : function(data) { // 此處放成功後執行的代碼
			if(data.result === "success"){
				Cookies.delAllCookies();
				Cookies.setCookie("username", data.username, COOKIE_EXPIRE);
				Cookies.setCookie("token", data.token, COOKIE_EXPIRE);
				Cookies.setCookie("freecredit", data.freecredit, COOKIE_EXPIRE);
				
				backHomepage();
			}else{
				alert(ERROR_011);
			}					
        },
        fail : function(status) { // 此處放失敗後執行的代碼
        	alert(ERROR_010);
        }
    });
}
/* 在fb.js中呼叫
 * 由chengeCotent()中點擊#js-signup-with-fb後呼叫loginFb()執行;
 */
function signupWithFB(fbData){

	document.querySelector('#js-sufb-submit').addEventListener('click', function() {
		var suFbUsername = document.getElementById('js-sufb-un');
		var suFbPassword = document.getElementById('js-sufb-pw');
		var suFbCoPassword = document.getElementById('js-sufb-cpw');
		
		var suFbYear = document.querySelector('#si-birth-year');
		var suFbMonth = document.querySelector('#si-birth-month');
		var suFbDay = document.querySelector('#si-birth-day');
		
		
		if(!suFbUsername.value || !suFbPassword.value || !suFbCoPassword.value || !suFbYear.value || !suFbMonth.value || !suFbDay.value){
			document.getElementById('js-sufb-zero-fill').style.display = "block";
			moveToTheTop();
		}else if(!fbData){
			AjaxClass({
		        url: URL_APP+'sign_up', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: {
		        	fbuserid: fbData.fbuserid,
		        	username: fbData.username,
		        	pwd1: suFbPassword.value,
		        	email: fbData.email,
		        	gender: fbData.gender,
		        	photo_url: fbData.photo_url,
		        	birth: suFbYear.value+"-"+suFbMonth.value+"-"+suFbDay.value,
		        	get_daily_horo: 0, //是否訂閱daily horoscope,0 or 1
		        	get_news: 0,//是否訂閱news,0 or 1
				},
				success : function(data) { // 此處放成功後執行的代碼
					if(data.result === "success"){
						Cookies.delAllCookies();
						Cookies.setCookie("username", fbData.username, COOKIE_EXPIRE);
						Cookies.setCookie("email", fbData.email, COOKIE_EXPIRE);
						Cookies.setCookie("token", data.token, COOKIE_EXPIRE);
					}else{
						alert(data.msg);
					}					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_009);
		        }
		    });
		}
		
	}, false);

}

function resendActiveEmail(){
	//點擊#js-signup-with-fb
	document.querySelector('#js-resend-mail-btn').addEventListener('click', function() {
		AjaxClass({
	        url: URL_APP+'send_active_email', //請求地址
	        type: "POST", //請求方式
	        jsonp: 'callback',
	        //time: 10000, //超時參數設置
	        data: {
	        	username: Cookies.getCookie("username"),
	        	validate_hash: Cookies.getCookie("validate_hash")
			},
			success : function(data) { // 此處放成功後執行的代碼
				if(data.result === true){
					document.getElementById('js-activation-resend').style.display = "block";
					/*setTimeout(function(){
						document.getElementById('js-activation-resend').style.display = "none";
					}, FADE_SPEED);*/
					Animate.fadeOut(document.getElementById('js-activation-resend'), FADE_SPEED);
				}else{
					alert(data.msg);
				}					
	        },
	        fail : function(status) { // 此處放失敗後執行的代碼
	        	alert(ERROR_002+" - FB");
	        }
	    });
	}, false);
}

function forgotPassword(){
	document.querySelector('#js-forgot-pwd-a').addEventListener('click', function() {
		changeContentWrap("forgot-pwd");
	}, false);
	
	document.querySelector('#forget-pwd-submit').addEventListener('click', function() {
		var fgUsername = document.getElementById('js-forget-un');
		var fgCaptcha = document.getElementById('recaptcha_response_field');
		
		if(!fgUsername.value || !fgCaptcha.value){
			document.getElementById('forgot-pwd-zero-fill').style.display = "block";
			moveToTheTop();
		}else{
			AjaxClass({
		        url: URL_APP+'forgot_password', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: {
		        	username: fgUsername.value,
		        	challenge: document.getElementById('recaptcha_challenge_field').value,
		        	response: fgCaptcha.value
				},
				success : function(data) { // 此處放成功後執行的代碼
					if(data.result === true){
						alert(true);
					}else{
						/*alert(data.msg);*/
						Recaptcha.reload();
						document.querySelector('#js-fg-warn-captcha').innerHTML = SIGN_ERROR_MSG_15;
						document.querySelector('#js-fg-warn-captcha').style.display = "block";
					}					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_009);
		        }
		    });
		}
		
	}, false);

}