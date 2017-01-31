import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import LocationFinder from './containers/location_finder';
import Stats from './containers/stats';
import State from './state';

require("../style/scss/styles.scss");

export default (
  <Route path="/" component={App} >
    <IndexRoute component={LocationFinder} />
    <Route path="/posts" component={PostsIndex} />
    <Route path="/new" component={LocationFinder} />
    <Route path="/stats" component={Stats} />
  </Route>
);
