import { FACEBOOK_NAME } from '../actions/index';

export default function(state = "Name", action) {
  switch(action.type) {
  case FACEBOOK_NAME:
    var name = action.payload.name;
    return name;
  default:
    return state;
  }
}
