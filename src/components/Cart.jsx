import React from 'react';

class Cart extends React.Component {
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
        <h1>carrinho de compra</h1>
        {prevStorage === null
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : (
            prevStorage.map((product) => {
              const quantidade = prevStorage.filter((ele) => product.title === ele.title);
              console.log(quantidade.length);
              return (
                <div key={ product.title }>
                  <p data-testid="shopping-cart-product-name">{product.title}</p>
                  <p data-testid="shopping-cart-product-quantity">{quantidade.length}</p>
                </div>
              );
            }))}
        {/* <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2> */}
      </div>

    );
  }
}
export default Cart;
