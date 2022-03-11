import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}
