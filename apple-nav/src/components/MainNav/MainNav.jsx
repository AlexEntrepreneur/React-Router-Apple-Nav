import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class MainNav extends Component {
  render () {
    return (
      <nav>
        <Link to="/" className="site-logo">🍎</Link>
        {
          this.props.productsData.map((productLine, index) =>
            <NavLink
              to={`/${productLine.name.toLowerCase()}`}
              key={index}
            >
            { productLine.name }
            </NavLink>
          )
        }
        <NavLink to="/">Support</NavLink>
        <button className="site-search">🔍</button>
        <button className="site-basket">🛍</button>
      </nav>
    );
  }
}

export default MainNav;
