import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}
