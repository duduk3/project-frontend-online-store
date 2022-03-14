import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      storaged: [],
    };
  }

  componentDidMount() {
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    if (prevStorage) {
      //* referência => https://www.youtube.com/watch?v=AiTyr_n5pws
      const arrayIds = new Map();
      prevStorage.forEach((elem) => {
        const quantity = prevStorage.filter((i) => elem.title === i.title);
        this.setState((
          { [elem.id]: quantity.length }
        ));
        if (!arrayIds.has(elem.id)) {
          arrayIds.set(elem.id, elem);
        }
      });
      const novoArray = [...arrayIds.values()];
      this.setState({ storaged: [...novoArray] }, () => this.getTotal());
    }
  }

  validate = () => true

  subItem = (id, product) => {
    const { state } = this;
    const one = 1;
    this.setState((prev) => ({ [id]: prev[id] - 1 }), () => this.getTotal());
    if (state[id] <= one) {
      this.removeItem(product);
    }
  }

  addItem = (id) => {
    this.setState((prev) => ({ [id]: prev[id] + 1 }), () => this.getTotal());
  }

  getTotal = () => {
    const { storaged } = this.state;
    const { state } = this;
    const totalOk = storaged.reduce((acc, price) => {
      const prevTotal = state[price.id] * price.price;
      return (acc + prevTotal);
    }, 0);
    this.setState({ total: totalOk.toFixed(2) });
  }

  removeItem = (product) => {
    const { storaged } = this.state;
    const afterRemove = storaged.filter((elem) => elem !== product);
    localStorage.setItem('cart', JSON.stringify(afterRemove));
    this.setState({ storaged: [...afterRemove] });
  }

  render() {
    const { storaged, total } = this.state;
    const { state } = this;
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        <Link to="/">Voltar à Home</Link>
        <h1>Carrinho de Compras</h1>
        { storaged.length === 0
          ? (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>)
          : (
            storaged
              .map((product) => {
                const quantity = prevStorage.filter((i) => product.title === i.title);
                return (
                  <div key={ product.title }>
                    <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <h4 data-testid="shopping-cart-product-quantity">
                      Quantidade:
                    </h4>
                    <button
                      data-testid="product-decrease-quantity"
                      type="button"
                      onClick={ () => {
                        this.subItem(product.id, product);
                      } }
                    >
                      -

                    </button>
                    <input
                      type="text"
                      name={ product.domain_id }
                      onChange={ ({ target }) => {
                        (this.validate(target, quantity.length, product));
                      } }
                      value={ state[product.id] }
                    />
                    <button
                      data-testid="product-increase-quantity"
                      type="button"
                      onClick={ () => {
                        this.addItem(product.id, product);
                      } }
                    >
                      +

                    </button>
                    {' '}
                    <button
                      type="button"
                      onClick={ () => this.removeItem(product, prevStorage) }
                    >
                      X

                    </button>
                    <h4>
                      Preço:
                      {' '}
                      { (product.price * state[product.id]).toFixed(2) }
                    </h4>
                  </div>
                );
              })) }
        <div>{ `TOTAL -------- ${total}` }</div>
        <button type="button">Finalizar Compra</button>
      </div>

    );
  }
}
