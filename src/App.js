import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/details" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
