import React from 'react';
import propTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = ({
      categories: [],
    });
  }

  componentDidMount() {
    this.fetchCategoties();
  }

  fetchCategoties = async () => {
    const requestCategories = await getCategories();
    this.setState({
      categories: requestCategories,
    });
  }

  handleClick = async (categoryId) => {
    const { getProducts } = this.props;
    await getProductsFromCategoryAndQuery(categoryId);
    await getProducts(categoryId);
  }

  render() {
    const { categories } = this.state;
    return (
      <label htmlFor="categories">
        categorias:
        { categories.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={ category.id }
            onClick={ () => this.handleClick(category.id) }
          >
            {category.name}

          </button>
        )) }
      </label>

    );
  }
}
Categories.propTypes = {
  getProducts: propTypes.func,
}.isRequered;

export default Categories;
