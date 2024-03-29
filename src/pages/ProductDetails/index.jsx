import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../../components/CartBtn';
import './index.css';

class ProductDetails extends React.Component {
  addToCartDetails = async (product) => {
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    if (prevStorage === null) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...prevStorage, product]));
    }
  }

  render() {
    const { location: { state: { dataProduct } } } = this.props;
    return (
      <div className='container-product'>
        <h1>{dataProduct.title}</h1>
        <img src={dataProduct.thumbnail} alt="produto" />
        <button
          type="button"
          onClick={() => this.addToCartDetails(dataProduct)}
        >
          Adicionar ao Carrinho

        </button>
        <CartBtn />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductDetails;
