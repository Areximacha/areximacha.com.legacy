//Self executing function
//It will execute once the script is loaded
//Additionally there is an init() function that gets called by the main app script when the modules are ready
var homeScript = (function() {

	function mobileNavToggle() {

		$('.mobile-nav-btn').on('click', function(e) {
			var self = $(e.currentTarget),
				nav = $('nav');

			if (self.hasClass('active')) {
				self.removeClass('active');
				nav.removeClass('active');
			} else {
				self.addClass('active');
				nav.addClass('active');
			}
		});
	}

	function navigationSelect() {

		$('nav a').on('click', function(e) {
			e.preventDefault();

			var self = $(e.currentTarget),
				selectedNav = self.data('nav'),
				nav = self.parentsUntil('nav').parent(),
				navBtn = nav.siblings('.mobile-nav-btn');

			if (nav.hasClass('active')) {
				navBtn.removeClass('active');
				nav.removeClass('active');
			}

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
    	mobileNavToggle();
    	workSelect();
    }

    init();

    return {
        init: init
    };

})();
