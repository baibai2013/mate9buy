/**
 * 
 */

function httpRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

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
// window.onload=function(){
// chrome.runtime.sendMessage("getcookise", function(response) {
// console.log('response');
// console.log(response);
// });
// }


document.addEventListener('DOMContentLoaded', function() {
	chrome.runtime.sendMessage("getcookise", function(response) {
		console.log('response');
		console.log(response);
});
	
})

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


