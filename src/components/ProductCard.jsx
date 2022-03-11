import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, image, data } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: '/details',
            state: { dataProduct: data },
          } }
        >
          <div data-testid="product-detail-link">
            <h2>{title}</h2>
            <img src={ image } alt="product" />
            <h2>{price}</h2>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  data: PropTypes.array,
}.isRequired;

export default ProductCard;
