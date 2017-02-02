import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import {hashHistory} from 'react-router';
import axios from 'axios';

class PostsNew extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    // creatPost(props);
    axios.post('http://localhost:3000/posts/', {
    name: this.props.name,
    city: this.props.location[0],
    country: this.props.location[1]
  })
  .then(function (response) {
    console.log(response);
    hashHistory.push('/posts');
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
        <form className="love-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            {this.props.name}
          </label>
          <label>in</label>
          <label>
            {this.props.location[0]}, {this.props.location[1]}
          </label>
          <input className="button" type="submit" value="pass the love"/>
        </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     name: state.name,
//     location: state.location
//   }
// }

export default connect(null, { createPost })(PostsNew);
