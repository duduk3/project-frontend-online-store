import React from 'react';
import CartBtn from './CartBtn';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ textSearch: target.value });
  }

  render() {
    const { textSearch } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="textSearch"
          value={ textSearch }
          onChange={ this.handleChange }
        />
        <CartBtn />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>

        <section>
          <ProductCard title={ textSearch } image={} price={}/>
        </section>
      </div>
    );
  }
}

export default Home;
