export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const response = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const result = await response.json();
    return result;
  }
  if (!query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const result = await response.json();
    return result;
  } if (!categoryId) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await response.json();

    return result;
  }
}
