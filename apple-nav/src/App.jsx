import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <>
        <MainNav />
        <Route exact path="/" component={HomePage} />
      </>
    );
  }
}

export default App;
