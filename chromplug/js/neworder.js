/**
 * 页面注入
 */


function saveInitData(){
	var s =$("body").html();
	var regx_activityid = /ec.activityId = \d{4,5};/g;
	var activityId = regx_activityid.exec(s)[0];

}

$(document).ready(function(){
	saveInitData();
});


//function httpRequest(url, callback) {
//	var xhr = new XMLHttpRequest();
//	xhr.open("GET", url, true);
//	xhr.onreadystatechange = function() {
//		if (xhr.readyState == 4) {
//			callback(xhr.responseText);
//		}
//	}
//	xhr.send();
//}

// httpRequest('http://www.ip138.com', function(ip){
// console.log(ip);
// });

// chrome.cookies.get({
// url:'http://www.vmall.com',
// name:'user'
// },function(cookie){
// console.log('user:'+cookie.value);
// chrome.browserAction.setIcon({path:
// 'images/'+(cookie.value?'online.png':'offline.png')});
// });





// chrome.cookies.getAll({'url':'http://www.vmall.com'}, function(cookie) {
// var cookie_str;
// for(i in cookie) {
// name = cookie[i].name;
// value = cookie[i].value;
// cookie_str += (name + "=" + value + ";\n");
// }
// console.log(cookie_str);
//	
// })


