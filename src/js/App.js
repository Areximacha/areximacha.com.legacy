//Makes the script run again when the page is reached again via the back button
window.onunload = function(){};

var App = function() {

	//Runs a page script if present
	if (typeof homeScript !== 'undefined' && homeScript['init']) {
		homeScript.init();
	}

	return {};

}();
