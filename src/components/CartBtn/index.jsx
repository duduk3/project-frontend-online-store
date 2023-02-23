import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class CartBtn extends Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          role="img"
          className='cart'
          aria-label="shopping-cart"
        >

          🛒️

        </Link>
      </div>
    );
  }
}
