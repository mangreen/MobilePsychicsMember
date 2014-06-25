/**
 * 
 */
function getPsychicList(){
	$.ajax({
		type: "POST",
		url : 'http://dev.ffn.tw/Psychic/app/get_psychic_list',
		dataType: 'jsonp',
		jsonp: "callback",//服务端用于接收callback调用的function名的参数  
		data: { 
			username: 'amykuo', 
			page: 1, 
			pagesize: 16
		},
		success: function(data){
			alert(data.psychics[0].name);
		},
		error: function(jqXHR, textStatus, errorThrown ){
			alert("xhr: "+jqXHR.status);
			alert("status: "+ textStatus); 
            alert("error"+errorThrown); 
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