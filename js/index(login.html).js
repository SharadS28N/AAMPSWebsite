window.fbAsyncInit = function() {
    FB.init({
      appId      : '946116086813914',
      cookie     : true,
      xfbml      : true,
      version    : 'v16.0'
    });
  
    FB.AppEvents.logPageView();   
    
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
  
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    console.log(response);
    if (response.status === 'connected') {
      // User is logged in and authenticated
      console.log('User is logged in and authenticated.');
      console.log(response.authResponse);
    } else {
      // User cancelled login or did not fully authorize
      console.log('User cancelled login or did not fully authorize.');
    }
  }
  
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  <fb:login-button 
    scope="public_profile,email"
    onlogin="checkLoginState();">
  </fb:login-button>
  