import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      storaged: [],
      chaves: {},
    };
  }

  componentDidMount() {
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    //* referência => https://www.youtube.com/watch?v=AiTyr_n5pws
    const arrayIds = new Map();
    prevStorage.forEach((elem) => {
      const quantity = prevStorage.filter((i) => elem.title === i.title);
      this.setState((prev) => (
        { ...prev.chaves, chaves: { [elem.id]: quantity.length } }
      ));
      if (!arrayIds.has(elem.id)) {
        arrayIds.set(elem.id, elem);
      }
    });
    const novoArray = [...arrayIds.values()];
    this.setState({ storaged: [...novoArray] });
  }

  validate = ({ value }, qtdOrigin, product) => {
    const one = 1;
    if (qtdOrigin < one || value < one) {
      value = 1;
      this.removeItem(product);
      console.log('value:', value, '/ quantidade original:', qtdOrigin);
    }
  }

  subItem = (id, qtd, price) => {
    console.log('subtrair item');
    this.setState((prev) => ({ total: prev.total - price }));
  }

  addItem = (id, qtd, price) => {
    console.log('adicionar item');
    this.setState((prev) => ({ total: prev.total + price }));
  }

  getTotal = () => {
    const { total } = this.state;
    console.log('esta retorna o total geral');
    // if (total <= 0) {
    //   localStorage.clear();
    //   this.setState({ storaged: [] });
    // }
    return total.toFixed(2);
  }

  removeItem = (product) => {
    const { storaged } = this.state;
    const afterRemove = storaged.filter((elem) => elem !== product);
    localStorage.setItem('cart', JSON.stringify(afterRemove));
    this.setState({ storaged: [...afterRemove] });
  }

  render() {
    const { storaged } = this.state;
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        <Link to="/">Voltar à Home</Link>
        <h1>Carrinho de Compras</h1>
        { prevStorage === null
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : (
            storaged
              .map((product) => {
                const quantity = prevStorage.filter((i) => product.title === i.title);
                const { chaves } = this.state;
                console.log(chaves);
                return (
                  <div key={ product.title }>
                    <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <h4 data-testid="shopping-cart-product-quantity">
                      Quantidade:
                    </h4>
                    <button
                      type="button"
                      onClick={ () => {
                        this.subItem(product.id, quantity.length, product.price);
                      } }
                    >
                      -

                    </button>
                    <input
                      type="text"
                      name={ product.domain_id }
                      onChange={ ({ target }) => {
                        (this.validate(target, quantity.length, product, prevStorage));
                      } }
                      placeholder={ quantity.length }
                      value={ chaves[product.id] }
                    />
                    <button
                      type="button"
                      onClick={ () => {
                        this.addItem(product.id, quantity.length, product.price);
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
                      { product.price * quantity.length }
                    </h4>
                  </div>
                );
              })) }
        <div>{ `TOTAL -------- ${this.getTotal()}` }</div>
      </div>

    );
  }
}
