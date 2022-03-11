import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { dataProduct } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ dataProduct.title }</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default ProductDetails;
