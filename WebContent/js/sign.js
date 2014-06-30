/**
 * 
 */
function setSignInAndUp(){
	setSingUiUx();
	submitSignup();
	submitLogin();
	updateEmail();
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
	$('#start_year').append(options);
}

function submitSignup(){
	var suUsername = $('#js-signup-un');
	var suPassword = $('#js-signup-pw');
	var suCoPassword = $('#js-signup-cpw');
	var suEmail = $('#js-signup-email');
	
	$('#signup-submit').click(function(){
		if(!suUsername.val() && !suPassword.val() && !suCoPassword.val() && !suEmail.val()){
			$('#js-signup-zero-fill').show();
		}else{
			$.ajax({
				type: "POST",
				url : URL_APP+'sign_up',
				dataType: 'jsonp',
				jsonp: "callback",//服务端用于接收callback调用的function名的参数  
				data: { 
					username: 'amykuo', 
					pwd1: '密碼',
					email: 'email',
					birth: '生日,格式YYYY-MM-DD',
					get_daily_horo: '是否訂閱daily horoscope,0 or 1',
					get_news: '是否訂閱news,0 or 1'
				},
				success: function(data){
					
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