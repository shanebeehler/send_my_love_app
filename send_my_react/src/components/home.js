import React from 'react';
import LocationFinder from '../containers/location_finder';
import Stats from '../containers/stats';

const Home = (props) => {

  return (
    <div>
      <LocationFinder />
      <Stats />
    </div>
  );
}

export default Home;
