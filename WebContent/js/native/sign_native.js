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
	
	[].forEach.call(document.querySelectorAll('.regi-input'), function (el) {
		el.addEventListener('blur', function() {
			if(!el.value){
				querySiblings(el, "div")[0].style.display = "block";
			}
		}, false);
	});
	
	[].forEach.call(document.querySelectorAll('.regi-select'), function (el) {
		el.addEventListener('blur', function() {
			if(!el.value){
				querySiblings(el, "div")[0].style.display = "block";
			}
		}, false);
	});
	
	/*將從今年, 往前100年加到"#start_year", 提供選擇*/
	var thisYear = new Date().getFullYear();
	var oFragment = document.createDocumentFragment();
	for(var i=(thisYear-100); i<=thisYear; i++){
		var oOption = document.createElement("option");//創建元素<option>
		oOption.setAttribute("value", i);//設定value
        var oText=document.createTextNode(i);//設定文本內容
        oOption.appendChild(oText);//文本添加到元素中
        oFragment.appendChild(oOption);//將每个元素文本添加到文檔碎片中
     }
	document.querySelector('#start_year').appendChild(oFragment);
}

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

function updateEmail(){
	document.getElementById('new-mail-submit').addEventListener('click', function() {
		var newEmail = document.getElementById('js-new-email');

		if(!newEmail.value){
			document.getElementById('js-new-mail-zero').style.display = "block";
		}
		
	}, false);
}