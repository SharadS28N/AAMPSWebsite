window.fbAsyncInit = function() {
    FB.init({
        appId      : 'your-app-id',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
    });
      
    FB.AppEvents.logPageView();   
};

function facebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('User is logged in and authenticated.');
            console.log(response.authResponse);
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'email'});
    }


    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
    }