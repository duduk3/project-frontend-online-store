import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt="product" />
        <h2>{price}</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
