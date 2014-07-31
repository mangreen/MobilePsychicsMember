"use strict";//使用strict mode(嚴格模式)
/**
 * isEmail:email格式檢查 return true、false 
 * isDate:日期格式檢查 return true、false 
 * chkAccount:檢查帳號必須為英數或底線組成，且必須為4~12碼 
 * chkPassword:6～12個字元，需包含數字及英文，勿使用特殊字元或符號 
 */
var Validate = Validate || {};//命名空間(Namespace),若Validate已存在則延用,否則設為空物件
Validate = {
    isEmail: function (para) {
        return para == '' ? false : !(!/^[^\s]+@[^\s]+\.[^\s]{2,3}$/.test(para));
    }, 
    isDate: function (para) {
        try {
            var D, d = para.split(/\D+/);
            d[0] *= 1;
            d[1] -= 1;
            d[2] *= 1;
            D = new Date(d[0], d[1], d[2]);
            return (D.getFullYear() == d[0] && D.getMonth() == d[1] && D.getDate() == d[2]) ? true : false;
        }
        catch (er) {
            return false;
        }
    }, 
    chkAccount: function (para) {
        return para == '' ? false : /^[0-9a-zA-Z_]{4,12}$/.test(para);
    }, 
    chkPassword: function (para) {
        //return para == '' ? false : /(?=^.{7,16}$)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*\s).*$/.test(para);
    	/* 密碼長度 7 到 16 個字元
    	 * 至少要有一個大寫或小寫的英文字母
    	 * 至少要有一個 0-9 的數字
    	 * 禁止空白
    	 */
    	//return para == '' ? false : /^(?!.*[^a-zA-Z0-9])(?=.{7,16})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(para);
    	/* 不允許空白, 特殊符號, 數字, 英文字母以外的字元輸入
    	 * 密碼長度 7 到 16 個字元
    	 * 至少要有一個小寫的英文字母
    	 * 至少要有一個大寫的英文字母
    	 * 至少要有一個 0-9 的數字
    	 */
    	return para == '' ? false : /^(?!.*[^a-zA-Z0-9])(?=.{7,16}).*$/.test(para);
    }
};