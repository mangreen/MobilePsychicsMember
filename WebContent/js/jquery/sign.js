/**
 * 
 */
function setSignInAndUp(){
	setSingUiUx();
	submitSignup();
	submitLogin();
	
	updateEmail();
	submitFB();
}

function setSingUiUx(){
	$('.regi-input').blur(function(){
		if(!$(this).val()){
			$(this).siblings("div").show();
		}
	});
	
	$('.regi-select').blur(function(){
		if(!$(this).val()){
			$(this).siblings("div").show();
		}
	});
	
	/*將從今年, 往前100年加到"#start_year", 提供選擇*/
	var thisYear = new Date().getFullYear();
	var options;
	for(var i=(thisYear-100); i<=thisYear; i++){
		options += '<option value="'+i+'">'+i+'</option>';
    }
	$('#birth-year').append(options);
}

function submitSignup(){
	var suUsername = $('#js-signup-un');
	var suPassword = $('#js-signup-pw');
	var suCoPassword = $('#js-signup-cpw');
	var suEmail = $('#js-signup-email');
	
	var suYear = $('#birth-year');
	var suMonth = $('#birth-month');
	var suDay = $('#birth-day');
	
	$('#signup-submit').click(function(){
		if(!suUsername.val() && !suPassword.val() && !suCoPassword.val() && !suEmail.val() && !suYear.val() && !suMonth.val() && !suDay.val()){
			$('#js-signup-zero-fill').show();
		}else{
			$.ajax({
				type: "POST",
				url : URL_APP+'sign_up',
				dataType: 'jsonp',
				jsonp: "callback",//服务端用于接收callback调用的function名的参数  
				data: { 
					username: suUsername.val(), 
					pwd1: suPassword.val(),
					email: suEmail.val(),
					birth: suYear.val()+'-'+!suMonth.val()+'-'+!suDay.val(), //'生日,格式YYYY-MM-DD'
					get_daily_horo: 0, //'是否訂閱daily horoscope,0 or 1'
					get_news: 0 //'是否訂閱news,0 or 1'
				},
				success: function(data){
					/*{"result":true}-->註冊成功
					{"result":false,"msg":"xxxxx"}-->註冊失敗*/
					if(data.result === true){
						
					}else{
						alert(data.msg);
					}
				},
				error: function(jqXHR, textStatus, errorThrown ){
					cnosole.log("xhr: "+jqXHR.status);
					cnosole.log("status: "+ textStatus); 
					cnosole.log("error"+errorThrown);
					
					alert(ERROR_002);
				}  
			});
		}
	});
}

function submitLogin(){
	$('#login-submit').click(function(){
		var liUsername = $('#js-login-un');
		var liPassword = $('#js-login-pw');

		if(!liUsername.value && !liPassword.value){
			$('#js-login-zero-fill').show();
		}
	});
}

function updateEmail(){
	$('#new-mail-submit').click(function(){
		var newEmail = $('#js-new-email');

		if(!newEmail.value){
			$('#js-new-mail-zero').show();
		}
	});
}

function submitFB(){
	$('.js-sign-submit-fb').click(function(){
		var FB_USER_ID = loginFb();
		
		if(!FB_USER_ID){
			$.ajax({
				type: "POST",
				url : URL_APP+'login',
				dataType: 'jsonp',
				jsonp: "callback",//服务端用于接收callback调用的function名的参数  
				data: {
		        	//username: "",
		        	//password: "",
		        	fbid: FB_USER_ID
				},
				success: function(data){
					
				},
				error: function(jqXHR, textStatus, errorThrown ){
					cnosole.log("xhr: "+jqXHR.status);
					cnosole.log("status: "+ textStatus); 
					cnosole.log("error"+errorThrown);
					
					alert(ERROR_003+" - FB");
				}  
			});
		}
		
	});
}