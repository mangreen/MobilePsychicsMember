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
/** 參考http://www.jb51.net/article/25832.htm
 *  查找最近的祖先元素，並回傳物件
 */
function findParents(node, parentID){
	var parent; //父元素

	if (typeof node == 'string') { 
        node = document.getElementById(node); 
    } 
	 
	//依序往上遍尋
	while (node.parentNode){
		parent = node.parentNode;
	    //找到document時停止避免死結
	    if (parent.nodeType == 9) { 
	    	return false;
	    }else if(parent.id == parentID){
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
        options.time = options.time || 1000;
        
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