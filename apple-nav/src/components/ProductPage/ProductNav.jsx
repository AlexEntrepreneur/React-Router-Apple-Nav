import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductNav extends Component {
  render () {
    const { products } = this.props.productLine;
    return (
      <header>
        <nav>
          {
            products.map((product, index) => {
              const productUrl = product.name.replace(' ', '-').toLowerCase();
              return (
                <NavLink
                  to={`/${productUrl}`}
                  key={index}
                >
                <p>{product.name}</p>
                </NavLink>
              );
            })
          }
        </nav>
      </header>
    );
  }
}

export default ProductNav;
