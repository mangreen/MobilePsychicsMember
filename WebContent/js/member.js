/**
 * 將.psy-a的click事件綁定在#psychic-list
 */
function delegatePsychic(){
  
	$("#psychic-list").on("click", ".psy-a", function() {  
	       alert(this.id);  
	});  
}
/**
 * 取得Psychic List
 */
function getPsychicList(page){
	$.ajax({
		type: "POST",
		url : 'http://dev.ffn.tw/Psychic/app/get_psychic_list',
		dataType: 'jsonp',
		jsonp: "callback",//服务端用于接收callback调用的function名的参数  
		data: { 
			username: 'amykuo', 
			page: page, 
			pagesize: 16
		},
		success: function(data){
			//alert(data.psychics[0].name);
			var pList = $('#psychic-list');
			pList.html("");//清除原有內容

			var oPsy = "";
			for(var i=0; i<data.psychics.length; i++){
		        oPsy += '<div class="psychic-wrap">'+
							'<a id="'+ data.psychics[i].name +'" class="psy-a" href="#">'+
								'<img id="img" class="psy-img" src="'+ data.psychics[i].img +'" alt="'+ data.psychics[i].name +'"/>'+
								'<span id="span" class="psy-name">'+ data.psychics[i].name +'</span>'+
							'</a>'+
						'</div>';
		    }
			
			pList.html(oPsy);//添加
		},
		error: function(jqXHR, textStatus, errorThrown ){
			cnosole.log("xhr: "+jqXHR.status);
			cnosole.log("status: "+ textStatus); 
			cnosole.log("error"+errorThrown);
			
			alert("E001: Fail to get psychic list");
		}  
	});
	
	/*$.ajax({
		type: "POST",
		url : 'test.jsp',
		dataType: 'json', 
		data: { 
			username: 'amykuo', 
			page: 1, 
			pagesize: 16
		},
		success: function(data){
			alert(data.psychics[0].name);
			//alert(data);
		},
		error: function(jqXHR, textStatus, errorThrown ){
			alert("xhr: "+jqXHR.status);
			alert("status: "+ textStatus); 
            alert("error"+errorThrown); 
		}  
	});*/
}