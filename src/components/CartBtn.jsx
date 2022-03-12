import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartBtn extends Component {
  render() {
    return (
      <div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <span role="img" aria-label="'shopping-cart">🛒️</span>
        </Link>
      </div>
    );
  }
}
