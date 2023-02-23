import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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
      <div className='containt-cart'>
        <Link to="/" className='go-back'>Voltar à Home</Link>
        <h1>Carrinho de Compras</h1>
        {storaged.length === 0
          ? (<h2>Seu carrinho está vazio</h2>)
          : (
            storaged
              .map((product) => (
                <div key={product.title} className='content'>
                  <h3>{product.title}</h3>
                  <img src={product.thumbnail} alt={product.title} />
                  <h4>
                    Quantidade:
                  </h4>
                  <div className='qtd'>
                    <button
                      type="button"
                      className='less'
                      onClick={() => {
                        this.subItem(product.id, product);
                      }}
                    >
                      -

                    </button>
                    <h3 className='qtd-number'>
                      {state[product.id]}
                    </h3>
                    <button
                      type="button"
                      className='more'
                      onClick={() => {
                        this.addItem(product.id, product);
                      }}
                    >
                      +

                    </button>
                    {' '}
                    <button
                      type="button"
                      className='close'
                      onClick={() => this.removeItem(product, prevStorage)}
                    >
                      X

                    </button>
                    <h4>
                      Preço:
                      {' '}
                      {(product.price * state[product.id]).toFixed(2)}
                    </h4>
                  </div>
                </div>
              )))}
        <div className='total'>{`TOTAL -------- ${total}`}</div>
        <button className='btn-finish' type="button">Finalizar Compra</button>
      </div>

    );
  }
}
