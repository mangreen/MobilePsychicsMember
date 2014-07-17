/**
 * 
 */
// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
	FB.init({
	    appId      : '439161419508445',
	    cookie     : true,  // enable cookies to allow the server to access 
	                        // the session
	    xfbml      : true,  // parse social plugins on this page
	    version    : 'v2.0' // use version 2.0
	});
};

function etFbLoginStatus(){
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			// Logged into your app and Facebook.
			console.log('Welcome!  Fetching your information.... ');
		    FB.api('/me', function(response) {
		    	console.log('Successful login for: ' + response.name);
		    });
		} else if (response.status === 'not_authorized') {
			// The person is logged into Facebook, but not your app.
			console.log('Please log into this app.');
		} else {
			// The person is not logged into Facebook, so we're not sure if
			// they are logged into this app or not.
			console.log('Please log into Facebook.');
		}
	});
}

function loginFb(elID){
	FB.login(function(response) {
		/*console.log(response);
		   
		console.log("status: "+response.status);
		console.log("accessToken: "+response.authResponse.accessToken);
		console.log("expiresIn: "+response.authResponse.expiresIn);
		console.log("signedRequest: "+response.authResponse.signedRequest);
		console.log("userID: "+response.authResponse.userID);*/
		
		if (response && response.status === 'connected') {
			var fbData = {};
			fbData.fbuserid = response.authResponse.userID; //測試 FB_ID = 1510574085841254;
			//Cookies.setCookie("fbuserid", response.authResponse.userID, COOKIE_EXPIRE);
			
			FB.api('/me', function(response) {
				console.log(response);
				
				fbData.email = response.email;
				fbData.username = response.name;
				fbData.gender = response.gender;
				
				/*Cookies.setCookie("username", response.name, COOKIE_EXPIRE);
				Cookies.setCookie("email", response.email, COOKIE_EXPIRE);
				Cookies.setCookie("gender", response.gender, COOKIE_EXPIRE);*/
				
				/*document.querySelector('#js-sufb-email').innerHTML = response.email;
				document.querySelector('#js-sufb-un').value = response.name;*/
				setUsernameAndEmail(response.name, response.email);
			});
			  
			FB.api('/me/picture', function(response) {
				console.log(response);
				
				fbData.photo_url = response.data.url;
				//Cookies.setCookie("photo_url", response.data.url, COOKIE_EXPIRE);
			});
			
			if(elID === "js-signup-with-fb"){
				changeContentWrap('signup-fb-wrap');
				signupWithFB(fbData);
			}else if(elID === "js-signin-with-fb"){
				loginWithFB(fbData);
			}else{
				alert(ERROR_004);
			}
			
			return true;
		} else {
			return false;
		}
	   
	}, {scope: 'public_profile,email'});
}