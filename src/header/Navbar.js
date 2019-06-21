import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

class Navbar extends React.Component {
    render() {
      return (
          <ul className="navbar">
            <li className="nav-link about">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link projects">
              <Link to="/topics">Projects</Link>
            </li>
          </ul>
      );
    }
}

export default Navbar;
