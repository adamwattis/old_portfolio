$(document).ready(function() {
	const projectsButton = $('#projectsButton');
	const contactButton = $('#contactButton');
	const projectsContent = $('#projects');
	const contactContent = $('#contact');

	projectsButton.on('click', function() {
		projectsContent.show();
		contactContent.hide();
		projectsButton.addClass('header__button--active');
		contactButton.removeClass('header__button--active');
		contactButton.addClass('header__button');
	});
	contactButton.on('click', function() {
		contactContent.show();
		projectsContent.hide();
		contactButton.addClass('header__button--active');
		projectsButton.removeClass('header__button--active');
		projectsButton.addClass('header__button');
	})
});