import React from 'react';
import CartBtn from './CartBtn';
import Categories from './Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <CartBtn />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria

        </h1>
        <Categories />
      </div>
    );
  }
}

export default Home;
