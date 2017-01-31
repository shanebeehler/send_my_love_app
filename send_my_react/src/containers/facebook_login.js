import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FacebookLoginDisplay from '../components/facebook_login_display';
import { facebookName } from '../actions/index';

class FacebookLogin extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1317906064955234',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8', // use version 2.8
        status     : true
      });

      FB.Event.subscribe('auth.statusChange', (response) => {
        if (response.authResponse) {
          FB.api('/me', (response) => {
            this.props.facebookName(response);
            // this.setState({name: response.name});
          });
        } else {
          const name = { name: "Name" }
          this.props.facebookName(name);
          console.log('User cancelled login or did not fully authorize.');
        }
      });

      // FB.getLoginStatus(function(response) {
      //   this.statusChangeCallback(response);
      // }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  // statusChangeCallback(response) {
  //   console.log('statusChangeCallback');
  //   if (response.status === 'connected') {
  //     // Logged into your app and Facebook.
  //     this.testAPI();
  //   }
  // }

  // testAPI() {
  //   FB.api('/me', (response) => {
  //     this.setState({name: response.name});
  //   });
  // }

  render() {
    return(
      <FacebookLoginDisplay />
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ facebookName: facebookName }, dispatch)
}

export default connect(null, mapDispatchToProps)(FacebookLogin);
