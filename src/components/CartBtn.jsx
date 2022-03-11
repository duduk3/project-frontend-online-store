import React from 'react';
import { Link } from 'react-router-dom';

class CartBtn extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <span>
            🛒️
          </span>
        </Link>
      </div>
    );
  }
}
export default CartBtn;
