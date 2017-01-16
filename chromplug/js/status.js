/**
 * 
 */

function httpRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			callback(true);
		}
	}
	xhr.onerror = function() {
		callback(false);
	}
	xhr.send();
}

setInterval(function() {
	httpRequest('http://www.vmall.com/', function(status) {
		chrome.browserAction.setIcon({
			path : 'images/' + (status ? 'online.png' : 'offline.png')
		});
	});

}, 5000);

// chrome.cookies.getAll({}, function(cookies) {
//	
//	
//
// });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message == 'getcookise') {
		chrome.cookies.get({
			url : 'http://www.vmall.com/',
			name : 'user'
		}, function(cookie) {
			sendResponse(cookie.value);
		});

	}
});