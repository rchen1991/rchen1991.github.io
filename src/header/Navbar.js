import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

class Navbar extends React.Component {
    render() {
      return (
          <ul>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
      );
    }
}

export default Navbar;
