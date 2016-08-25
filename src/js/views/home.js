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
