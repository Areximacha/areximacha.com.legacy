//Makes the script run again when the page is reached again via the back button
window.onunload = function(){};

var App = function() {

	//Runs a page script if present
	if (typeof homeScript !== 'undefined' && homeScript['init']) {
		homeScript.init();
	}

	return {};

}();

//Self executing function
//It will execute once the script is loaded
//Additionally there is an init() function that gets called by the main app script when the modules are ready
var homeScript = (function() {

    function init() {

    }

    init();

    return {
        init: init
    };

})();
