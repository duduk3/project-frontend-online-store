import React from 'react';
import CartBtn from './CartBtn';
import ProductCard from './ProductCard';
import * as api from '../services/api';
import Categories from './Categories';

class Home extends React.Component {
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
    console.log(prevStorage);
  }

  render() {
    const { textSearch, data } = this.state;
    const { handleChange, handleClick, addToCart, getProducts } = this;
    const productsResult = [...data];
    return (
      <div>
        <label htmlFor="search">

          <input
            data-testid="query-input"
            type="text"
            name="textSearch"
            value={ textSearch }
            onChange={ handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </label>
        <CartBtn />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>

        <Categories getProducts={ getProducts } />
        <section>
          {
            productsResult.map((product) => (
              <ProductCard
                key={ product.id }
                title={ product.title }
                image={ product.thumbnail }
                price={ product.price }
                addToCart={ addToCart }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default Home;
