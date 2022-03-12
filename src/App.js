import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
