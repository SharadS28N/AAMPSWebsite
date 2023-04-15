particlesJS.load('particles-js', 'particles.json');

$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		let email = $('#email').val();
		let password = $('#password').val();

		if (email === '' || password === '') {
			alert('Please fill in all fields');
		} else {
			// Do login
			console.log('Logged in');
		}
	});
});
