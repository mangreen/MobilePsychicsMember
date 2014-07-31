"use strict";//使用strict mode(嚴格模式)
/**
 * 
 */

//var country = {"ary_country":{"Afghanistan":{"id":1,"name":"Afghanistan"},"Albania":{"id":2,"name":"Albania"},"Algeria":{"id":3,"name":"Algeria"},"Andorra":{"id":4,"name":"Andorra"},"Angola":{"id":5,"name":"Angola"},"Antigua and Barbuda":{"id":6,"name":"Antigua and Barbuda"},"Argentina":{"id":7,"name":"Argentina"},"Armenia":{"id":8,"name":"Armenia"},"Aruba":{"id":9,"name":"Aruba"},"Australia":{"id":10,"name":"Australia"},"Austria":{"id":11,"name":"Austria"},"Azerbaijan":{"id":12,"name":"Azerbaijan"},"Bahamas":{"id":13,"name":"Bahamas"},"Bahrain":{"id":14,"name":"Bahrain"},"Bangladesh":{"id":15,"name":"Bangladesh"},"Barbados":{"id":16,"name":"Barbados"},"Belgium":{"id":17,"name":"Belgium"},"Belize":{"id":18,"name":"Belize"},"Benin":{"id":19,"name":"Benin"},"Bermuda":{"id":20,"name":"Bermuda"},"Bhutan":{"id":21,"name":"Bhutan"},"Bolivia":{"id":22,"name":"Bolivia"},"Bosnia & Herzegovina":{"id":23,"name":"Bosnia & Herzegovina"},"Botswana":{"id":24,"name":"Botswana"},"Brazil":{"id":25,"name":"Brazil"},"Brunei":{"id":26,"name":"Brunei"},"Bulgaria":{"id":27,"name":"Bulgaria"},"Burkina Faso":{"id":28,"name":"Burkina Faso"},"Burundi":{"id":29,"name":"Burundi"},"Cambodia":{"id":30,"name":"Cambodia"},"Cameroon":{"id":31,"name":"Cameroon"},"Canada":{"id":32,"name":"Canada"},"Cape Verde":{"id":33,"name":"Cape Verde"},"Cayman Islands":{"id":34,"name":"Cayman Islands"},"Central African Republic":{"id":35,"name":"Central African Republic"},"Chad":{"id":36,"name":"Chad"},"Chile":{"id":37,"name":"Chile"},"China":{"id":38,"name":"China"},"Colombia":{"id":39,"name":"Colombia"},"Comoros":{"id":40,"name":"Comoros"},"Congo (Zaire)":{"id":41,"name":"Congo (Zaire)"},"Congo-Brazzaville":{"id":42,"name":"Congo-Brazzaville"},"Costa Rica":{"id":43,"name":"Costa Rica"},"Croatia":{"id":44,"name":"Croatia"},"Cyprus":{"id":45,"name":"Cyprus"},"Czech Republic":{"id":46,"name":"Czech Republic"},"Denmark":{"id":47,"name":"Denmark"},"Djibouti":{"id":48,"name":"Djibouti"},"Dominica":{"id":49,"name":"Dominica"},"Dominican Republic":{"id":50,"name":"Dominican Republic"},"Ecuador":{"id":51,"name":"Ecuador"},"Egypt":{"id":52,"name":"Egypt"},"El Salvador":{"id":53,"name":"El Salvador"},"Equatorial Guinea":{"id":54,"name":"Equatorial Guinea"},"Eritrea":{"id":55,"name":"Eritrea"},"Estonia":{"id":56,"name":"Estonia"},"Ethiopia":{"id":57,"name":"Ethiopia"},"Fiji":{"id":58,"name":"Fiji"},"Finland":{"id":59,"name":"Finland"},"France":{"id":60,"name":"France"},"French Guiana":{"id":61,"name":"French Guiana"},"Gabon":{"id":62,"name":"Gabon"},"Gambia":{"id":63,"name":"Gambia"},"Georgia":{"id":64,"name":"Georgia"},"Germany":{"id":65,"name":"Germany"},"Ghana":{"id":66,"name":"Ghana"},"Gibraltar":{"id":67,"name":"Gibraltar"},"Greece":{"id":68,"name":"Greece"},"Grenada":{"id":69,"name":"Grenada"},"Guadeloupe":{"id":70,"name":"Guadeloupe"},"Guatemala":{"id":71,"name":"Guatemala"},"Guinea":{"id":72,"name":"Guinea"},"Guinea-Bissau":{"id":73,"name":"Guinea-Bissau"},"Guyana":{"id":74,"name":"Guyana"},"Haiti":{"id":75,"name":"Haiti"},"Honduras":{"id":76,"name":"Honduras"},"Hong Kong":{"id":77,"name":"Hong Kong"},"Hungary":{"id":78,"name":"Hungary"},"Iceland":{"id":79,"name":"Iceland"},"India":{"id":80,"name":"India"},"Indonesia":{"id":81,"name":"Indonesia"},"Ireland":{"id":82,"name":"Ireland"},"Israel":{"id":83,"name":"Israel"},"Italy":{"id":84,"name":"Italy"},"Jamaica":{"id":85,"name":"Jamaica"},"Japan":{"id":86,"name":"Japan"},"Jersey":{"id":87,"name":"Jersey"},"Jordan":{"id":88,"name":"Jordan"},"Kazakhstan":{"id":89,"name":"Kazakhstan"},"Kenya":{"id":90,"name":"Kenya"},"Kuwait":{"id":91,"name":"Kuwait"},"Kyrgyzstan":{"id":92,"name":"Kyrgyzstan"},"Laos":{"id":93,"name":"Laos"},"Latvia":{"id":94,"name":"Latvia"},"Lebanon":{"id":95,"name":"Lebanon"},"Lesotho":{"id":96,"name":"Lesotho"},"Libya":{"id":97,"name":"Libya"},"Liechtenstein":{"id":98,"name":"Liechtenstein"},"Lithuania":{"id":99,"name":"Lithuania"},"Luxembourg":{"id":100,"name":"Luxembourg"},"Macau":{"id":101,"name":"Macau"},"Macedonia":{"id":102,"name":"Macedonia"},"Madagascar":{"id":103,"name":"Madagascar"},"Malawi":{"id":104,"name":"Malawi"},"Malaysia":{"id":105,"name":"Malaysia"},"Maldives":{"id":106,"name":"Maldives"},"Mali":{"id":107,"name":"Mali"},"Malta":{"id":108,"name":"Malta"},"Mauritania":{"id":109,"name":"Mauritania"},"Mauritius":{"id":110,"name":"Mauritius"},"Mayotte":{"id":111,"name":"Mayotte"},"Mexico":{"id":112,"name":"Mexico"},"Monaco":{"id":113,"name":"Monaco"},"Mongolia":{"id":114,"name":"Mongolia"},"Morocco":{"id":115,"name":"Morocco"},"Mozambique":{"id":116,"name":"Mozambique"},"Namibia":{"id":117,"name":"Namibia"},"Nepal":{"id":118,"name":"Nepal"},"Netherlands":{"id":119,"name":"Netherlands"},"Netherlands Antilles":{"id":120,"name":"Netherlands Antilles"},"New Zealand":{"id":121,"name":"New Zealand"},"Nicaragua":{"id":122,"name":"Nicaragua"},"Niger":{"id":123,"name":"Niger"},"Nigeria":{"id":124,"name":"Nigeria"},"Norway":{"id":125,"name":"Norway"},"Oman":{"id":126,"name":"Oman"},"Pakistan":{"id":127,"name":"Pakistan"},"Panama":{"id":128,"name":"Panama"},"Papua New Guinea":{"id":129,"name":"Papua New Guinea"},"Paraguay":{"id":130,"name":"Paraguay"},"Peru":{"id":131,"name":"Peru"},"Philippines":{"id":132,"name":"Philippines"},"Poland":{"id":133,"name":"Poland"},"Portugal":{"id":134,"name":"Portugal"},"Qatar":{"id":135,"name":"Qatar"},"Romania":{"id":136,"name":"Romania"},"Russia":{"id":137,"name":"Russia"},"Rwanda":{"id":138,"name":"Rwanda"},"San Marino":{"id":139,"name":"San Marino"},"Sao Tome & Principe":{"id":140,"name":"Sao Tome & Principe"},"Saudi Arabia":{"id":141,"name":"Saudi Arabia"},"Senegal":{"id":142,"name":"Senegal"},"Serbia & Montenegro":{"id":143,"name":"Serbia & Montenegro"},"Seychelles":{"id":144,"name":"Seychelles"},"Sierra Leone":{"id":145,"name":"Sierra Leone"},"Singapore":{"id":146,"name":"Singapore"},"Slovakia":{"id":147,"name":"Slovakia"},"Slovenia":{"id":148,"name":"Slovenia"},"Somalia":{"id":149,"name":"Somalia"},"South Africa":{"id":150,"name":"South Africa"},"South Korea":{"id":151,"name":"South Korea"},"Spain":{"id":152,"name":"Spain"},"Sri Lanka":{"id":153,"name":"Sri Lanka"},"St. Kitts & Nevis":{"id":154,"name":"St. Kitts & Nevis"},"St. Lucia":{"id":155,"name":"St. Lucia"},"St. Vincent & the Grenadines":{"id":156,"name":"St. Vincent & the Grenadines"},"Suriname":{"id":157,"name":"Suriname"},"Swaziland":{"id":158,"name":"Swaziland"},"Sweden":{"id":159,"name":"Sweden"},"Switzerland":{"id":160,"name":"Switzerland"},"Taiwan, ROC":{"id":161,"name":"Taiwan, ROC"},"Tajikistan":{"id":162,"name":"Tajikistan"},"Tanzania":{"id":163,"name":"Tanzania"},"Thailand":{"id":164,"name":"Thailand"},"Togo":{"id":165,"name":"Togo"},"Trinidad and Tobago":{"id":166,"name":"Trinidad and Tobago"},"Tunisia":{"id":167,"name":"Tunisia"},"Turkey":{"id":168,"name":"Turkey"},"Turkmenistan":{"id":169,"name":"Turkmenistan"},"Turks and Caicos Islands":{"id":170,"name":"Turks and Caicos Islands"},"Uganda":{"id":171,"name":"Uganda"},"Ukraine":{"id":172,"name":"Ukraine"},"United Arab Emirates":{"id":173,"name":"United Arab Emirates"},"United Kingdom":{"id":174,"name":"United Kingdom"},"United States":{"id":175,"name":"United States"},"Uruguay":{"id":176,"name":"Uruguay"},"Uzbekistan":{"id":177,"name":"Uzbekistan"},"Venezuela":{"id":178,"name":"Venezuela"},"Vietnam":{"id":179,"name":"Vietnam"},"Western Sahara":{"id":180,"name":"Western Sahara"},"Yemen":{"id":181,"name":"Yemen"},"Zambia":{"id":182,"name":"Zambia"}},"default_country":"Taiwan, ROC"};

function setFunds(){
	getCreditcardList();
	useNewCreditcard();
	getCountry();
	addCreditNew();
	addCreditOld();
	continueToHome();
	
	/*choseCreditcard();
	addCreditcardDragListener();
	deleteCreditcard();
	undoCreditcardListeners();
	changeContentWrap("add-funds");*/
}

/**showLoading(boolean flag): 是否顯示loading畫面
 * flag: boolean, true顯示, false關閉
 */
function showLoading(flag){
	document.querySelector("#order-loading-wrap").style.display = !flag ? "none" : "block";
}

function getCreditcardList(){
	document.querySelector("#js-user-a").addEventListener("click", function(){
		if(Cookies.getCookie("token")){
			AjaxClass({
		        url: URL_APP+'get_creditcard_list', //請求地址
		        type: "POST", //請求方式
		        jsonp: 'callback',
		        //time: 10000, //超時參數設置
		        data: { //請求參數
					username: Cookies.getCookie("username"), 
					token: Cookies.getCookie("token")
				},
				success : function(data) { // 此處放成功後執行的代碼
					if(Cookies.getCookie("token") === 0){
						[].forEach.call(document.querySelectorAll('.js-secured-page'), function (el) {
							el.style.display = "none";
						});
						[].forEach.call(document.querySelectorAll('.js-freecredits-img'), function (el) {
							el.style.display = "block";
						});
					}else{
						[].forEach.call(document.querySelectorAll('.js-secured-page'), function (el) {
							el.style.display = "block";
						});
						[].forEach.call(document.querySelectorAll('.js-freecredits-img'), function (el) {
							el.style.display = "none";
						});
					}
					
					if(data.creditcards.length <= 0 ){
						//document.querySelector("#js-car-old-wrap").style.display = "none";
						
						changeContentWrap("add-funds-new");
					}else{
						/*[].forEach.call(document.querySelectorAll(".js-card-new"), function (el) {
							el.style.display = "none";
						});*/
						
						var htmlList = '', 
						htmlTemp = document.querySelector("#tmpl-card-old").innerHTML;

						data.creditcards.forEach(function(object, index) {
						    htmlList += htmlTemp.template(object, index);
						});
	
						document.querySelector("#js-card-old-list").innerHTML = htmlList;
						addClass( "card-chose", document.querySelector(".card-div") );
						
						choseCreditcard();
						addCreditcardDragListener();
						deleteCreditcard();
						undoCreditcardListeners();
						
						changeContentWrap("add-funds-old");
					}
					
		        },
		        fail : function(status) { // 此處放失敗後執行的代碼
		        	alert(ERROR_001);
		        }
		    });
		}else{
			alert("Please Login!");
			changeContentWrap("login");
		}
	}, false);
}

function choseCreditcard(){
	[].forEach.call(document.querySelectorAll('.card-div'), function (el) {
		el.addEventListener('click', function(){
			if(this.id !== "" && hasClass("card-chose", this) == false){
				[].forEach.call(document.querySelectorAll('.card-chose'), function (el2) {
					removeClass( '.card-chose', el2 )
				});
				
				addClass( "card-chose", this );
			}
			
		}, false);
	});
}

function addCreditcardDragListener(){
	
	var oldX=0, newX=0, diffX=0;
	
	[].forEach.call(document.querySelectorAll('.card-old-drag'), function (el) {
		el.addEventListener('mousedown', _eventStart, false);
	});
	[].forEach.call(document.querySelectorAll('.card-old-drag'), function (el) {
		el.addEventListener('touchstart', _eventStart, false);
	});
	
	window.addEventListener('mouseup', _eventEnd, false);
	window.addEventListener('touchend', _eventEnd, false);

	function _eventEnd(e){	    
		//if(window.dragCard.className.indexOf("card-old-drag") !== -1){			
	    	if(diffX > 100){
				window.dragCard.style.display = "none";
				window.dropCard.style.display = "block";
			}
	    //}
		
		if(e.type === "mouseup"){
			window.removeEventListener('mousemove', _delCreditcard, true);
		}else if(e.type === "touchend"){
			window.removeEventListener('touchmove', _delCreditcard, true);
		}
		
	}

	function _eventStart(e){

		if(e.currentTarget.className.indexOf("card-old-drag") !== -1){
			
	    	var cardID = e.currentTarget.id.replace("js-card-drag-", "");
			window.dragCard = document.getElementById(e.currentTarget.id);
	        window.dropCard = document.getElementById("js-card-del-"+cardID);

	        if(e.type === "mousedown"){
	        	oldX = e.screenX;
	        	window.addEventListener('mousemove', _delCreditcard, true);
	        }else if(e.type === "touchstart"){
	        	oldX = e.touches[0].screenX;
	        	window.addEventListener('touchmove', _delCreditcard, true);
	        }
	    }
	}

	function _delCreditcard(e){

		_stopDefault(e);
		
		if(e.type === "mousemove"){
			newX = e.screenX;
        }else if(e.type === "touchmove"){
        	newX = e.touches[0].screenX;
        }
		
		diffX = newX - oldX;
	}
	
	function _stopDefault(e){ 
		if(e && e.preventDefault){ 
			e.preventDefault();  
		}else{ 
	        window.event.returnValue = false; 
		}   
	    return false; 
	} 
}

function undoCreditcardListeners(){
	[].forEach.call(document.querySelectorAll('.card-undo-btn'), function (el) {
		el.addEventListener('click', function(){
			var cardID = el.id.replace("js-card-undo-", "");
			document.querySelector("#js-card-del-"+cardID).style.display = "none";
			document.querySelector("#js-card-drag-"+cardID).style.display = "block";
		}, false);
	});
}

function deleteCreditcard(){
	[].forEach.call(document.querySelectorAll('.card-del-btn'), function (el) {
		el.addEventListener('click', function(){
			if(Cookies.getCookie("token")){
				var cardID = el.id.replace("js-card-del-btn-", "");
				//alert(cardID);
				document.querySelector("#js-card-drop-"+cardID).style.display = "none";
				
				AjaxClass({
			        url: URL_APP+'ERROR_014', //請求地址
			        type: "POST", //請求方式
			        jsonp: 'callback',
			        //time: 10000, //超時參數設置
			        data: { //請求參數
						username: Cookies.getCookie("username"), 
						token: Cookies.getCookie("token"),
						card_id: cardID
					},
					success : function(data) { // 此處放成功後執行的代碼
						if(data.result === true ){
							document.querySelector("#js-card-drop-"+cardID).style.display = "none";
						}else{
							alert(ERROR_015);
						}
			        },
			        fail : function(status) { // 此處放失敗後執行的代碼
			        	console.log(ERROR_014);
			        }
			    });
			}else{
				alert("Please Login!");
				changeContentWrap("login");
			}
		}, false);
	});
}

function useNewCreditcard(){
	[].forEach.call(document.querySelectorAll('.card-new'), function (el) {
		el.addEventListener('click', function(){
			changeContentWrap("add-funds-new");
		}, false);
	});
}

function addCreditOld(){
	document.querySelector("#js-order-submit-old").addEventListener('click', function(){
		
		var chosenCard = document.querySelector('.card-chose');

		if(Cookies.getCookie("token")){
		
			if(chosenCard){
	
				showLoading(true);
				
				AjaxClass({
			        url: URL_APP+'add_credit', //請求地址
			        type: "POST", //請求方式
			        jsonp: 'callback',
			        //time: 10000, //超時參數設置
			        data: { 
			        	username: Cookies.getCookie("username"),//使用者帳號
			        	token: Cookies.getCookie("token"),//login時取得的token
			        	money: document.getElementById('add-funds-select').value,//金額id(2=10,3=20,4=40,5=50,6=80,7=100,9=free credit)
			        	card_id: chosenCard.id.replace("js-card-div-", "")
					},
					success : function(data) { // 此處放成功後執行的代碼
						showLoading(false);
						if(data.result === true){
							if(data.msg === "no freecredit"){
								document.querySelector("#js-receipt-taken").style.display = "block";
							}else if(document.getElementById('add-funds-select').value === 9){
								document.querySelector("#js-receipt-free").style.display = "block";
							}else{
								document.querySelector("#js-receipt-time").innerHTML = data.order_time;
								document.querySelector("#js-receipt-amount").innerHTML = data.amount;
								[].forEach.call(document.querySelectorAll(".js-receipt-ok"), function (el) {
									el.style.display = "block";
								});
							}
							getViewerBalance();
							changeContentWrap("receipt");
						}else{
							[].forEach.call(document.querySelectorAll(".js-card-info-fail"), function (el) {
								el.innerHTML = data.msg;
							});
							[].forEach.call(document.querySelectorAll(".js-card-info-fail"), function (el) {
								el.style.display = "block";
							});
							moveToTheTop();
							//alert(data.msg);
						}					
			        },
			        fail : function(status) { // 此處放失敗後執行的代碼
			        	showLoading(false);
			        	alert(ERROR_017);
			        }
			    });
			}
		}else{
			alert("Please Login!");
			changeContentWrap("login");
		}
	}, false);
}

function addCreditNew(){
	document.querySelector("#js-order-submit-new").addEventListener('click', function(){
		if(Cookies.getCookie("token")){
			var card_holder = document.getElementById('js-new-card-name').value;
			var card_num = document.getElementById('js-new-card-num').value;
	
			var expire_date_y = document.querySelector('#js-new-card-year').value;
			var expire_date_m = document.querySelector('#js-new-card-month').value;
			
			var card_verify = document.getElementById('js-new-card-cv').value;
			var addr1 = document.getElementById('js-new-card-addr1').value;
			var addr2 = document.getElementById('js-new-card-addr2').value;
			var city = document.getElementById('js-new-card-city').value;
			var state_province = document.getElementById('js-new-card-state').value;
			var country = document.getElementById('js-new-card-country').value;
			var zip = document.getElementById('js-new-card-zip').value;	
			
			if(!card_holder || !card_num || !expire_date_y || !expire_date_m || !card_verify || !addr1 || !city || !state_province || !country || !zip){
				document.getElementById('js-card-fill-zero').style.display = "block";
				
				moveToTheTop();
			}else{
				showLoading(true);
				
				AjaxClass({
			        url: URL_APP+'add_credit', //請求地址
			        type: "POST", //請求方式
			        jsonp: 'callback',
			        //time: 10000, //超時參數設置
			        data: { 
			        	username: Cookies.getCookie("username"),//使用者帳號
			        	token: Cookies.getCookie("token"),//login時取得的token
			        	money: document.getElementById('add-funds-select').value,//金額id(2=10,3=20,4=40,5=50,6=80,7=100,9=free credit)
			        	card_holder: card_holder,//持卡人姓名
			        	card_num: card_num,//信用卡號碼
			        	expire_date_y: expire_date_y,//信用卡到期年YYYY
			        	expire_date_m: expire_date_m,//信用卡到期月M
			        	card_verify: card_verify,//信用卡背面識別碼CVV
			        	addr1: addr1,//地址
			        	addr2: addr2,//地址
			        	city: city,//城市
			        	state_province: state_province,//州省
			        	country: country,//國家
			        	zip: zip
					},
					success : function(data) { // 此處放成功後執行的代碼
						showLoading(false);
						if(data.result === true){
							if(data.msg === "no freecredit"){
								document.querySelector("#js-receipt-taken").style.display = "block";
							}else if(document.getElementById('add-funds-select').value === 9){
								document.querySelector("#js-receipt-free").style.display = "block";
							}else{
								document.querySelector("#js-receipt-time").innerHTML = data.order_time;
								document.querySelector("#js-receipt-amount").innerHTML = data.amount;
								[].forEach.call(document.querySelectorAll(".js-receipt-ok"), function (el) {
									el.style.display = "block";
								});
							}
							getViewerBalance();
							changeContentWrap("receipt");
						}else{
							[].forEach.call(document.querySelectorAll(".js-card-info-fail"), function (el) {
								el.innerHTML = data.msg;
							});
							[].forEach.call(document.querySelectorAll(".js-card-info-fail"), function (el) {
								el.style.display = "block";
							});
							moveToTheTop();
							//alert(data.msg);
						}					
			        },
			        fail : function(status) { // 此處放失敗後執行的代碼
			        	showLoading(false);
			        	alert(ERROR_017);
			        }
			    });
			}
		}else{
			alert("Please Login!");
			changeContentWrap("login");
		}
	}, false);
}

function continueToHome(){
	document.querySelector("#js-continue-btn").addEventListener('click', function(){
		
		changeContentWrap("member");
	}, false);
}

function getCountry(){
	
	AjaxClass({
        url: URL_APP+'get_country', //請求地址
        type: "POST", //請求方式
        jsonp: 'callback',
        //time: 10000, //超時參數設置
        data: { 
        	
		},
		success : function(data) { // 此處放成功後執行的代碼
			
			var htmlList = '<option value=""></option>', 
				htmlTemp = document.querySelector("#tmpl-select-courntry").innerHTML,
				defaultCountryID = -1;
			
			for(var keys in data.ary_country) {
			    htmlList += htmlTemp.template(data.ary_country[keys]);
			    
			    if(data.default_country == keys){
			    	defaultCountryID = data.ary_country[keys].id;
			    }
			}

			document.querySelector("#js-new-card-country").innerHTML = htmlList;
			document.querySelector("#js-new-card-country").value = defaultCountryID;
        },
        fail : function(status) { // 此處放失敗後執行的代碼
        	alert(ERROR_016);
        }
    });
}
