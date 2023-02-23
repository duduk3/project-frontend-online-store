import React, { Component } from 'react';
import CartBtn from '../../components/CartBtn';
import ProductCard from '../../components/ProductCard';
import * as api from '../../services/api';
import Categories from '../../components/Categories';
import './index.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: '',
      data: [],
    };
  }

  getProducts = async (categoria) => {
    const { textSearch } = this.state;
    if (!categoria) {
      const product = await api.getProductsFromCategoryAndQuery(undefined, textSearch);
      this.setState({ data: product.results });
    } else {
      const product = await api.getProductsFromCategoryAndQuery(categoria, undefined);
      this.setState({ data: product.results });
    }
  }

  handleClick = () => {
    this.getProducts();
  }

  handleChange = ({ target }) => {
    this.setState({ textSearch: target.value });
  }

  addToCart = async (product) => {
    const prevStorage = JSON.parse(localStorage.getItem('cart'));
    if (prevStorage === null) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...prevStorage, product]));
    }
  }

  render() {
    const { textSearch, data } = this.state;
    const { handleChange, handleClick, addToCart, getProducts } = this;
    const productsResult = [...data];
    return (
      <div className='container-store'>

        <h1 className='title'>Loja de Conveniência "Online Store" </h1>

        <div className='content-store'>
          <label className='search' htmlFor="search">
            <input
              type="text"
              name="textSearch"
              value={textSearch}
              onChange={handleChange}
            />
            <button
              className='btn'
              type="button"
              onClick={handleClick}
            >
              Pesquisar
            </button>
          </label>
          <CartBtn />
        </div>


        <h2>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <Categories getProducts={getProducts} />
        <section>
          {
            productsResult.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                addToCart={addToCart}
                data={product}
              />
            ))
          }
        </section>
      </div>
    );
  }
}
