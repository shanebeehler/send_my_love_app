import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showPosition } from '../actions/index';
import LocationDisplay from '../components/location_display';
import PostsNew from './posts_new';
import FacebookLoginDisplay from '../components/facebook_login_display';

class LocationFinder extends Component {
  componentDidMount() {
    this.fetchLocation();
  }

  fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.showPosition);
    }
    else { console.log('FAIL')};
  }

  render() {
    if (this.props.name === "Name") {
      return (
        <div className="form-wrap">
          <FacebookLoginDisplay />
          <p>to send my love.</p>
        </div>
      );
    }
    else {
      return(
        <div className="form-wrap">
          <FacebookLoginDisplay />
          <PostsNew name={this.props.name} location={this.props.location} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    location: state.location
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ showPosition: showPosition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFinder);
