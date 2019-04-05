import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductNav from './ProductNav';

class ProductPage extends Component {
  render () {
    return (
      <>
        <ProductNav
          productLine={this.props.data}
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
        />
      </>
    );
  }
}

export default ProductPage;
