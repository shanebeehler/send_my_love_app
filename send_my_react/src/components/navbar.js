import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const NavBar = (props) => {

  return (
    <nav>
      <ul>
        <li><Link to="/"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Home</Link></li>
        <li><Link to="/new"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Send Love</Link></li>
        <li><Link to="/posts"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Love Flow</Link></li>
        <li><Link to="/stats"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Stats</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
