import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, addToCart, data } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: '/details',
            state: {
              dataProduct: data,
            },
            funct: addToCart,
          } }
        >
          <div data-testid="product-detail-link">
            <h2>{ title }</h2>
            <img src={ thumbnail } alt="product" />
            <h2>{price}</h2>
          </div>

        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(this.props) }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  addToCart: PropTypes.func,
  data: PropTypes.array,
}.isRequired;

export default ProductCard;
