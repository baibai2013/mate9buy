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

chrome.runtime.sendMessage("getcookise", function(response) {
	console.log(response);
});

chrome.cookies.get({
	'url' : 'http://www.vmall.com/',
	'name' : 'user'
}, function(cookie) {
	console.log('user:' + cookie.value);
});