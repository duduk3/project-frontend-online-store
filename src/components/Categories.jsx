import React from 'react';
import { getCategories } from '../services/api';

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

  render() {
    const { categories } = this.state;
    return (
      <label htmlFor="categories">
        categorias:
        {categories.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={ category.id }
          >
            {category.name}

          </button>
        ))}
      </label>

    );
  }
}
export default Categories;
