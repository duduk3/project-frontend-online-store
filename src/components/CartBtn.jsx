import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartBtn extends Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          role="img"
          aria-label="shopping-cart"
          data-testid="shopping-cart-button"
        >

          🛒️

        </Link>
      </div>
    );
  }
}
