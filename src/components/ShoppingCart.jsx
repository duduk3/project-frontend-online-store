import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  // constructor() {
  //   super();
  // }

  // getStorage = () => {
  //   const prevStorage = JSON.parse(localStorage.getItem('cart'));

  //   return prevStorage;
  // }

  render() {
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        <Link to="/">Voltar à Home</Link>
        <h1>Carrinho de Compras</h1>
        { prevStorage === null
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : (
            prevStorage
              .map((product) => {
                const quantity = prevStorage.filter((i) => product.title === i.title);

                return (
                  <div key={ product.title }>
                    <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
                    <img src={ product.image } alt={ product.title } />
                    <h4 data-testid="shopping-cart-product-quantity">
                      Quantidade:
                      {' '}
                      {quantity.length}
                    </h4>
                    <h4>
                      Preço:
                      {' '}
                      { product.price }
                    </h4>
                  </div>
                );
              })) }
      </div>

    );
  }
}
