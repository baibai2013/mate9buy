/**
 * 
 */


var user ={};
user.cookies=new Array();
var time = new Date(2017,0,18,10,08,01);
var confirmJsPrefix = '20170118100800_4726_';
var activityId = 4726;
user.creatOrderUrl = 'http://ord01.vmall.com/order/z/createOrder.do';
user.skuId=25199040;

var loginPars = ["uid", "user", "name", "ts", "valid", "sign", "cid", "wi", "ticket", "hasphone", "hasmail", "logintype"];

user.getcookies= function(){
	chrome.cookies.getAll({
		url:'http://www.vmall.com/'
	}, function (cookiess) {
		user.cookies = cookiess;

	})
}

user.getcookieByName = function (key) {
	for(var i=0;i<user.cookies.length;i++){
		if(user.cookies[i].name === key){
			return user.cookies[i].value;
		}
	}
}
user.getLoginPars= function() {
	var c = "";
	for (var i = 0; i < loginPars.length; i += 1) {
		var d = encodeURIComponent(user.cookies.get(loginPars[i]));
		if (d) {
			c += "&" + loginPars[i] + "=" + d
		}
	}
	return c
}

user.getActivityId=function(){

}

function D(ac) {
	var aa = Array(256);
	var ab = Array(256);
	var Z, X, Y;
	for (Z = 0; Z < 256; Z++) {
		aa[Z] = ac.charCodeAt(Z % ac.length);
		ab[Z] = Z
	}
	for (Z = 0, X = 0; Z < 256; Z++) {
		X = (X + ab[Z] + aa[Z]) % 256;
		Y = ab[Z];
		ab[Z] = ab[X];
		ab[X] = Y
	}
	return ab
}

function r(ad, ac) {
	var ab = 0,
		Z = 0,
		aa;
	for (var X = 0; X < ad.length; X++) {
		var ab = (ab + 1) % 256;
		var Z = (Z + ac[ab]) % 256;
		aa = ac[ab];
		ac[ab] = ac[Z];
		ac[Z] = aa;
		var Y = (ac[ab] + (ac[Z] % 256)) % 256;
		ad[X] = ad[X] ^ ac[Y]
	}
	return ad
}

function F(ab) {
	var X = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var Z, Y = "",
		aa = ab.length;
	for (Z = 0; Z < aa - 2; Z += 3) {
		Y += X.charAt(ab.charCodeAt(Z) >>> 2);
		Y += X.charAt(((ab.charCodeAt(Z) & 3) << 4) | (ab.charCodeAt(Z + 1) >>> 4));
		Y += X.charAt(((ab.charCodeAt(Z + 1) & 15) << 2) | (ab.charCodeAt(Z + 2) >>> 6));
		Y += X.charAt(ab.charCodeAt(Z + 2) & 63)
	}
	if (aa % 3 === 2) {
		Y += X.charAt(ab.charCodeAt(Z) >>> 2);
		Y += X.charAt(((ab.charCodeAt(Z) & 3) << 4) | (ab.charCodeAt(Z + 1) >>> 4));
		Y += X.charAt(((ab.charCodeAt(Z + 1) & 15) << 2));
		Y += "="
	} else {
		if (aa % 3 === 1) {
			Y += X.charAt(ab.charCodeAt(Z) >>> 2);
			Y += X.charAt(((ab.charCodeAt(Z) & 3) << 4));
			Y += "=="
		}
	}
	return Y
}

function Q(ab, aa) {
	aa = encodeURIComponent(aa);
	var Y = D(ab);
	var Z = Array(aa.length);
	for (var X = 0; X < aa.length; X++) {
		Z[X] = aa.charCodeAt(X)
	}
	r(Z, Y);
	for (var X = 0; X < Z.length; X++) {
		Z[X] = String.fromCharCode(Z[X])
	}
	return F(Z.join(""))
}


user.setorder = function () {
	var dateform = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
	var Z = "nowTime=" + dateform + "&skuId="+user.skuId+"&skuIds="+user.skuId+"yes"+ user.getLoginPars() + "&activityId=" + activityId;
	var X = user.cookies.get("sign").substring(0,16);
	Z = Q(X,Z);
	var submitUrl = user.creatOrderUrl + "?sign=" + user.cookies.get("sign") + "&data=" + encodeURIComponent(Z) + "&uid=" + user.cookies.get("uid") + "&skuId=" + user.skuId + "&skuIds=" + user.skuId;
	console.log(submitUrl);

}


function my_clock(el) {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = m >= 10 ? m : ('0' + m);
	s = s >= 10 ? s : ('0' + s);
	el.innerHTML = h + ":" + m + ":" + s;
	setTimeout(function() {
		my_clock(el)
	}, 1000);
}

// my_clock(clock_div);

// chrome.cookies.get({
// url : 'http://www.vmall.com/',
// name : 'name'
// }, function(cookie) {
// clock_div.innerHTML=cookie.value;
// });

//document.addEventListener('DOMContentLoaded', function() {
//	 chrome.cookies.getAll({
//	 url : 'http://www.vmall.com/'
//	 //name : 'name'
//	 }, function(cookie) {
//	 //clock_div.innerHTML=cookie.value;
//		 console.log(cookie)
//	 });
//
//	user.getcookies();
//})

$(document).ready(function(){

	user.getcookies();
	$("#tjdd").click(function () {
		user.setorder();
	})
});