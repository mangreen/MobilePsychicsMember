/**
 * 在String物件中, 新增自訂義template函式
 */
String.prototype.template = function(obj) {
    return this.replace(/\$\w+\$/gi, function(matchs) {
        var returns = obj[matchs.replace(/\$/g, "")];		
        return (returns + "") == "undefined"? "": returns;
    });
};

/**
@para parentId 包裹容器的id
@para selector 容器內元素的選擇器，支持id和className
@para fn 元素上要執行的函數
*/
function delegate(parent, eventType, selector, fn){
	var parentId;
    //參數處理
    if(typeof parent === 'string'){
        var parent = document.getElementById(parent);
        !parent && console.log('parent not found');
        parentId = parent;
    }else{
    	parentId = parent.id;
    }

    if(typeof selector !== 'string'){
        console.log('selector is not string');
    }
    
    if(typeof fn !== 'function'){
    	console.log('fn is not function');
    }
    
    function handle(e){
        //獲取event對象
        //標準DOM方法事件處理函數第一個參數是event對象
        //IE可以使用全局變量window.event
        var evt = window.event ? window.event : e;
    
        //獲取觸發事件的原始事件源
        //標準DOM方法是用target獲取當前事件源
        //IE使用evt.srcElement獲取事件源
        var target = evt.target || evt.srcElement;
    
        //獲取當前正在處理的事件源
        //標準DOM方法是用currentTarget獲取當前事件源
        //IE中的this指向當前處理的事件源
        var currentTarget= e ? e.currentTarget : this;
    
        //在IE 9下  window.event 與 e 不同 evt沒有currentTarget屬性,e才有currentTarg 
        console.log("src id === "+target.id+"\ncurent target id == "+currentTarget.id+"\nparent id == "+target.parentNode.id);

        if(target.id === selector || target.className.indexOf(selector) != -1){
            fn.call(target);
        }else{
        	//當target不對時依序往上遍尋
	        while (target.parentNode){
	            //找到parent時停止
	            if (target.parentNode.id === parentId) { 
	    	        break;
	            }else if(target.parentNode.id === selector || target.parentNode.className.indexOf(selector) !== -1){
	    	        fn.call(target.parentNode);
	    	        break;
	            }
	            
	            target = target.parentNode;
	        }
        }
    }
    
    parent[eventType]=handle;
}
/** 以className搜尋物件 by 網站anyexample
 *  http://paladinprogram.blogspot.tw/2011/05/javascript-class-name.html
 */
function getElementsByClass(searchClass, domNode, tagName) {
    if (domNode == null) domNode = document;
    if (tagName == null) tagName = '*';
    var el = new Array();
    var tags = domNode.getElementsByTagName(tagName);
    var tcl = " "+searchClass+" ";
    
    for(i=0,j=0; i<tags.length; i++) {
        var test = " " + tags[i].className + " ";
        if (test.indexOf(tcl) != -1)
        el[j++] = tags[i];
    }
    return el;

}
/** 
 *  查找兄弟元素，並回傳物件
 */
function querySiblings(node, selector){
	var parent; //父元素
	var siblings = [];

    //元素參數處理
    if(typeof node === 'string'){
        var node = document.querySelector(node);
        !node && alert('findParents: node not found');
    }
    
    parent = node.parentNode;
	 
	//依序往上遍尋
	if (parent){
		siblings = parent.querySelectorAll(selector);//兄弟元素Array
		return siblings;
	}
	
	return false;
}
/** 參考http://www.jb51.net/article/25832.htm
 *  查找最近的祖先元素，並回傳物件
 */
function findParents(node, selector){
    var parent;//父元素

    //元素參數處理
    if(typeof node === 'string'){
        var node = document.getElementById(node);
        !node && alert('findParents: node not found');
    }
	 
	//依序往上遍尋
	while (node.parentNode){
		parent = node.parentNode;
	    //找到document時停止避免死結
	    if (parent.nodeType == 9) { 
	    	return false;
	    }else if(parent.id == selector  || parent.className.indexOf(selector) != -1){
	    	return parent;
	    } 
	  	
	    node = parent; 
	}
	return false;
}
/** 
 * 自定義增加class 
 */
function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}
/** 
 * 自定義移除class 
 */
function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}
/** 
 * 自定義jQuery append實現
 */
function appendHTML(parent, newHTML){
    var parent = parent;
    var innerHTML = parent.innerHTML + newHTML;
    parent.innerHTML = "";
    parent.innerHTML =  innerHTML;
}
/** 
 * 自定義jQuery prepend實現
 */
function prependHTML(parent, newHTML){
    var parent = parent;
    var innerHTML = newHTML + parent.innerHTML;
    parent.innerHTML = "";
    parent.innerHTML =  innerHTML;
}
/** 原生僅有parentNode.insertBefore(newNode , thisNode) & parentNode.appendChild(newNode)
 *  自定義 insertAfter(newNode, thisNode) & prependChild(parent , newNode)
 */
function insertAfter(newNode, thisNode){
    var parent = thisNode.parentNode;
    if (parent.lastChild == thisNode) {
        // 如果父節點的最後一個節點是指定節點，则直接添加
        parent.appendChild(newNode);
    }else {
        parent.insertBefore(newNode , thisNode.nextSibling);
        //如果不是，则在指定节点的下一个节点前面插入
    }
}
/**
  * func: appendChildPre    在指定節點的前插入子節點
  * pram: parent            父節點
  * pram: newNode           要添加的新節點
**/
function prependChild(parent , newNode){
    if(parent.firstChild){
        // 如果存在子節點，则在第一個子節點的前面添加
        parent.insertBefore(newNode , parent.firstChild);
    }else{
        // 如果不存在，則直接從最後添加
        parent.appendChild(newNode);
    }
}
/**
 *  自定義 ajax & jsonp 類別
 */
function AjaxClass(opt){
	this.opt = opt;
	
	//格式化參數
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace("."));
        return arr.join("&");
    }
	
	function ajax(options) {
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        //options.time = options.time || 1000;
        
        if (!options.url) {
            throw new Error("參數不合法");
        }
        
        if (!options.jsonp) {
        	/*//創建 - 非IE6 - 第一步
            if (window.XMLHttpRequest) {
                var xhr = new XMLHttpRequest();
            } else { //IE6及其以下版本瀏覽器
                var xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }*/
        	var xhr = window.XMLHttpRequest && (window.location.protocol !== 'file:' || !window.ActiveXObject) ?
    		        function() {//創建 - 非IE6 - 第一步
    		            return new XMLHttpRequest();
    		        } :
    		        function() {//IE6及其以下版本瀏覽器
    		            try {
    		                return new ActiveXObject('Microsoft.XMLHTTP');
    		            } catch(e) {
    		                throw new Error('XMLHttpRequest not supported');
    		            }
    		        };

            //接收 - 第三步
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var status = xhr.status;
                    if (status >= 200 && status < 300) {
                    	var responseText = (options.dataType === "json") ? JSON.parse(xhr.responseText) : xhr.responseText;
                        options.success && options.success(responseText, xhr.responseXML);
                    } else {
                        options.fail && options.fail(status);
                    }
                }
            };

            //連接 和 發送 - 第二步
            if (options.type == "GET") {
                xhr.open("GET", options.url + "?" + formatParams(options.data), true);
                xhr.send(null);
            } else if (options.type == "POST") {
                xhr.open("POST", options.url, true);
                //設置表單提交時的內容類型
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(params);
            }
        }else{
        	//創建 script 標籤並加入到頁面中
            var callbackName = ('jsonp_' + Math.random()).replace(".", "");
            var oHead = document.getElementsByTagName('head')[0];
            options.data[options.jsonp] = callbackName;

            var oS = document.createElement('script');
            oHead.appendChild(oS);
            
            //創建jsonp回調函數
            window[callbackName] = function (json) {
                oHead.removeChild(oS);
                clearTimeout(oS.timer);
                window[callbackName] = null;
                options.success && options.success(json);
            };

            //發送請求
            oS.src = options.url + '?' + formatParams(options.data);
            
            //超時處理
            if (options.time) {
                oS.timer = setTimeout(function () {
                    window[callbackName] = null;
                    oHead.removeChild(oS);
                    options.fail && options.fail({ message: "超時" });
                }, options.time);
            }
        }   
    }
    
	ajax(this.opt);
    
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