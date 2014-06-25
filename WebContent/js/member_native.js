function delegatePsychic(){
  
	delegate('psychic-list', 'onclick', 'psy-a', function(){
		
        //alert(this.querySelector('span').innerHTML);
		alert(this.id);
    });
}
/**
 *  取得Psychic list
 */
function getPsychicList(page){
	var ajaxjsonp = new AjaxClass({
        url: 'http://dev.ffn.tw/Psychic/app/get_psychic_list', //請求地址
        type: "POST", //請求方式
        jsonp: 'callback',
        //time: 10000, //超時參數設置
        data: { //請求參數
			username: 'amykuo', 
			page: page, 
			pagesize: 16
		},
		success : function(data) { // 此處放成功後執行的代碼
        	//alert(data.psychics[0].name);
			var pList = document.querySelector('#psychic-list');
			pList.innerHTML = "";//清除原有內容

			var oPsy = "";
			for(var i=0; i<data.psychics.length; i++){
		        oPsy += '<div class="psychic-wrap">'+
							'<a id="'+ data.psychics[i].name +'" class="psy-a" href="#">'+
								'<img id="img" class="psy-img" src="'+ data.psychics[i].img +'" alt="'+ data.psychics[i].name +'"/>'+
								'<span id="span" class="psy-name">'+ data.psychics[i].name +'</span>'+
							'</a>'+
						'</div>';
		    }
			
			pList.insertAdjacentHTML("beforeend", oPsy);//添加
        },
        fail : function(status) { // 此處放失敗後執行的代碼
        	alert(status.message);
        }
    });
	
	/*var ajaxpost = new AjaxClass({
        type: 'POST',
        url: 'test.jsp',
        dataType: "json",
        data: { 
            username: 'amykuo', 
            page: 1, 
            pagesize: 16
        },
        success: function(data) {            
            alert(data.psychics[0].img);
        },
        fail : function(status) { // 此處放失敗後執行的代碼
        	alert(status);
        }
    });*/
}
