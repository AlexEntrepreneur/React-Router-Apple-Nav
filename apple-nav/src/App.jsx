import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
const appleProductData = require('./productData.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: appleProductData.result
    }
  }
  render() {
    const { productData } = this.state;
    return (
      <>
        <MainNav productsData={productData}/>
        <Route exact path="/" component={HomePage} />
        {
          productData.map((productLine, index) => <Route
            path={`/${productLine.name.toLowerCase()}`}
            render={props => <ProductPage {...props} data={productLine}/>}
            key={index}
          />)
        }
      </>
    );
  }
}

export default App;
