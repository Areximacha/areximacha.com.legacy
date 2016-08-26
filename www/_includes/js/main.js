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

	function navigationSelect() {

		$('.main-nav a').on('click', function(e) {
			e.preventDefault();

			var self = $(e.currentTarget),
				selectedNav = self.data('nav');

			$('html, body').animate({
				scrollTop: $('.section-' + selectedNav).offset().top
			}, 500);
		});
	}

	function workSelect() {

		$('.selector-work a').on('click', function(e) {
			e.preventDefault();

			var self = $(e.currentTarget),
				selectedProject = self.data('project'),
				projectDescription = $('.project-description');

			if (self.parent().hasClass('active')) {
				return false;
			}

			$('.selector-work').find('.active').removeClass('active');
			$('.bg-work.active').removeClass('active');
			projectDescription.find('.active').removeClass('active');

			self.parent().addClass('active');
			$('.bg-work.' + selectedProject).addClass('active');
			projectDescription.find('.' + selectedProject).addClass('active');

		});
	}

    function init() {

    	navigationSelect();
    	workSelect();
    }

    init();

    return {
        init: init
    };

})();
