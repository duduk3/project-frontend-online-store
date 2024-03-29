import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, addToCart, data } = this.props;
    return (
      <div>
        <Link
          to={{
            pathname: '/details',
            state: {
              dataProduct: data,
            },
            funct: addToCart,
          }}
        >
          <div>
            <h2>{title}</h2>
            <img src={thumbnail} alt="product" />
            <h2>{price}</h2>
          </div>

        </Link>
        <button
          type="button"
          onClick={() => addToCart(data)}
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
