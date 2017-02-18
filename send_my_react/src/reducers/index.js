import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import LocationReducer from './reducer_location';
import FacebookReducer from './reducer_facebook';
import StatsReducer from './reducer_stats';

const rootReducer = combineReducers({
  posts:          PostsReducer,
  facebookObject: FacebookReducer,
  location:       LocationReducer,
  stats:          StatsReducer
});

export default rootReducer;
