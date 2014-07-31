"use strict";//使用strict mode(嚴格模式)
/**
 * 將.psy-a的click事件綁定在#psychic-list
 */

function setHompage(){
	delegatePsychic();
	getPsychicList(1);
}

function delegatePsychic(){
  
	delegate('psychic-list', 'onclick', 'psy-a', function(){	
		alert(this.id);
    });
}
/**
 *  取得Psychic list
 */
function getPsychicList(page){

	//PAGESIZE = Math.floor((CLIENT_W / (PSYCHIC_IMG_W + PSYCHIC_SPARE_W*2))) * Math.floor(((CLIENT_H-HEADER_H-BANNER_H-PAGE_WARP_H) / (PSYCHIC_IMG_H + PSYCHIC_SPARE_W*2)));
	
	AjaxClass({
        url: URL_APP+'get_psychic_list', //請求地址
        type: "POST", //請求方式
        jsonp: 'callback',
        //time: 10000, //超時參數設置
        data: { //請求參數
			username: 'amykuo', 
			page: page, 
			pagesize: PAGESIZE
		},
		success : function(data) { // 此處放成功後執行的代碼
        	//alert(data.psychics[0].name);
			
			/*
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
			 */			
			
			var htmlList = '', 
				htmlTemp = document.querySelector("#tmpl-psylist").innerHTML;

			data.psychics.forEach(function(object) {
			    htmlList += htmlTemp.template(object);
			});

			document.querySelector("#psychic-list").innerHTML = htmlList;
			
        },
        fail : function(status) { // 此處放失敗後執行的代碼
        	alert(ERROR_001);
        }
    });
	
	/*new AjaxClass({
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
