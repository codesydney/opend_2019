import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//https://github.com/DaxChen/material-ui-Link-within-MenuItem

const Navbar = (props) => {
  return (
    <div>
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Opend</a>
          <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/report">Report</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
      <ul id="mobile-nav" className="sidenav right" >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/report">Report</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);