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

  getProducts = async () => {
    const { textSearch } = this.state;
    const product = await api.getProductsFromCategoryAndQuery(undefined, textSearch);
    this.setState({ data: product.results });
  }

  handleClick = () => {
    this.getProducts();
  }

  handleChange = ({ target }) => {
    this.setState({ textSearch: target.value });
  }

  render() {
    const { textSearch, data } = this.state;
    const productsResult = [...data];
    return (
      <div>
        <label htmlFor="search">

          <input
            data-testid="query-input"
            type="text"
            name="textSearch"
            value={ textSearch }
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        <CartBtn />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria

        </h1>

        <section>
          {
            productsResult.map((product) => (
              <ProductCard
                key={ product.id }
                title={ product.title }
                image={ product.thumbnail }
                price={ product.price }
              />
            ))
          }
        </section>

        <Categories />
      </div>
    );
  }
}

export default Home;
