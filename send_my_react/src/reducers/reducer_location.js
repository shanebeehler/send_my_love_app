import { SHOW_POSITION } from '../actions/index';

export default function(state = "Derp", action) {
  switch(action.type) {
  case SHOW_POSITION:
    var city = action.payload.data.results[0].address_components[0].long_name;
    var country = action.payload.data.results[0].address_components[3].long_name;
    var location = [city, country]
    return location;
  default:
    return state;
  }
}

// .then(axios.spread((responseCity, responseCountry) => {
//   var city = responseCity.data.results[0].address_components[0].long_name;
//   var country = responseCountry.data.results[0].address_components[0].long_name;
//   var address = `${city}, ${country}`;
//   console.log(address);
//   this.setState({location: address});
// }));
