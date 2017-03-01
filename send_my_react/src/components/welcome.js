import React from 'react';
import FacebookLoginDisplay from './facebook_login_display';

const Welcome = (props) => {

  return (
    <div className="welcome">
      <div className="copy-background">
        <div className="copy">
          <h2>Welcome</h2>
          <p>Everyone deserves love.</p>
          <p>
            Share your name and current city
            to join the global love chain.
          </p>
          <p>
            Breathe in, receive love.
            Breathe out, send love.
          </p>
          <FacebookLoginDisplay/>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
