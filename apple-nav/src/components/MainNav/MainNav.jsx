import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class MainNav extends Component {
  render () {
    return (
      <nav>
        <Link to="/" className="site-logo">🍎</Link>
        <NavLink to="/">Mac</NavLink>
        <NavLink to="/">iPad</NavLink>
        <NavLink to="/">iPhone</NavLink>
        <NavLink to="/">Watch</NavLink>
        <NavLink to="/">TV</NavLink>
        <NavLink to="/">Music</NavLink>
        <NavLink to="/">Support</NavLink>
        <Link to="/" className="site-search">🔍</Link>
        <Link to="/" className="site-basket">🛍</Link>
      </nav>
    );
  }
}

export default MainNav;
