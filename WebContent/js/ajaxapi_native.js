/**
 *  取得Psychic list
 */
function getPsychicList(){
	var ajaxj = new AjaxClass({
        url: 'http://dev.ffn.tw/Psychic/app/get_psychic_list', //請求地址
        type: "POST", //請求方式
        jsonp: 'callback',
        time: 1000, //超時參數設置
        data: { //請求參數
			username: 'amykuo', 
			page: 1, 
			pagesize: 16
		},
		success : function(data) { // 此處放成功後執行的代碼
        	//alert(data.psychics[0].name);
			var pList = document.querySelector('#psychic-list');
			//pList.innerHTML = "";
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
/*
function AjaxClass(newOpt) {
    this.opt = newOpt;
    var jsc = new Date().getTime();

    var param = function(obj) {
        var pairs = [];
        for(var name in obj) {
            var pair = encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]);
            pairs.push(pair.replace('/%20/g', '+'));
        }
        return pairs.join('&');
    };
    
    var getScript = function(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
    
        // 跨瀏覽器處理 script 下載完成後的事件
        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                this.onload = this.onreadystatechange = null;
                document.getElementsByTagName('head')[0].removeChild(this);
                callback();
            }
        };
    
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    var ajax = function(option) {
        option.type = option.type || 'GET';
        option.header = option.header || {'Content-Type':'application/x-www-form-urlencoded'};
        option.callback = option.callback || function() {};
        option.data = option.data || {};
        
        // 沒有 url，啥事也作不了
        if(!option.url) {
            return;
        }

        if(!option.jsonp){
        	var xhr = window.XMLHttpRequest && (window.location.protocol !== 'file:' || !window.ActiveXObject) ?
		        function() {
		            return new XMLHttpRequest();
		        } :
		        function() {
		            try {
		                return new ActiveXObject('Microsoft.XMLHTTP');
		            } catch(e) {
		                throw new Error('XMLHttpRequest not supported');
		            }
		        };
        
        	var request = xhr();
            request.onreadystatechange = function() {
                option.callback.call(request, request);
            };
            
            var body = null;
            var url = option.url;
            if(option.data) {
                if(option.type === 'POST') {
                    body = param(option.data);
                } else {
                    url = option.url + '?' + param(option.data) + '&time=' + jsc;
                }
            }

            request.open(option.type, url);
            for(var name in option.header) {
                request.setRequestHeader(name, option.header[name]);
            }
            request.send(body);
        }else{
            // 建立暫時的函式
        	option.data[option.jsonp] = 'XD' + jsc++;
            window[option.data[option.jsonp]] = function(json) {
            	option.callback(json);
            };
            var url = option.url + '?' + param(option.data);

            // 取得 script 檔案
            getScript(url, function() {
            	// script 下載並執行完後移除暫時的函式
            	window[option.data[option.jsonp]] = undefined;
            	try {
            		delete window[option.data[option.jsonp]];
            	}catch(e) {
            	  
            	}
            });
        }
        
    };
    
    ajax(this.opt);
}

function getPsychicList(){
	var ajaxj = new AjaxClass({
        url: 'http://dev.ffn.tw/Psychic/app/get_psychic_list',
        jsonp: 'callback',
        data: { 
			username: 'amykuo', 
			page: 1, 
			pagesize: 16
		},
        callback : function(data) {
        	alert(data.psychics[0].name);
        }
    });
	
	var ajaxpost = new AjaxClass({
        type: 'POST',
        url: 'test.jsp',
        data: { 
            username: 'amykuo', 
            page: 1, 
            pagesize: 16
        },
        callback: function(request) {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    var message = '';
                    if(request.responseText === 'urlExisted') {
                        message = 'URL 已存在';
                    }
                    //alert(message);

                    var jsonObj = JSON.parse(request.responseText);
                    alert(jsonObj.psychics[0].img);
                	
                }
            }
        }
    });
}
*/