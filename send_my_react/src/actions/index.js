import axios from 'axios';
import haversine from 'haversine-distance';
import { config } from '../../config.js';

export const FETCH_POSTS   = 'FETCH_POSTS';
export const CREATE_POST   = 'CREATE_POST';
export const SHOW_POSITION = 'SHOW_POSITION';
export const FACEBOOK_NAME = 'FACEBOOK_NAME';
export const FETCH_STATS   = 'FETCH_STATS';

const API_KEY  = config.geocode_api_key;
const ROOT_URL = 'http://localhost:3000/posts/';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}`, props);

  return  {
    type: CREATE_POST,
    payload: request
  }
}

export function showPosition(position) {
  const request = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${API_KEY}`);
  console.log(request);
  return {
    type: SHOW_POSITION,
    payload: request
  };
}

export function distanceBetween(from, to) {
  const distance = haversine(from, to);

  return {
    type: DISTANCE_BETWEEN,
    payload: distance
  };
}

export function fetchStats() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_STATS,
    payload: request
  }
}

export function facebookName(response) {
  return {
    type: FACEBOOK_NAME,
    payload: response
  }
}
