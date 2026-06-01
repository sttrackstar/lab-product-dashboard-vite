import React, { useState } from 'react';

import ProductList from './components/ProductList';

const App = () => {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Phone', price: 699.99, inStock: false },
    { id: 3, name: 'Tablet', price: 499.99, inStock: true },
    { id: 4, name: 'Watch', price: 199.99, inStock: true }
  ]);

  const [filter, setFilter] = useState('all');
  const filteredProducts = products.filter((product) => {
    
    if (filter === 'inStock') {
      return product.inStock;
    }
    
    if (filter === 'outOfStock') {
      return !product.inStock;
    }
    // If all
    return true;
  });

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1 id='header'>Product Dashboard</h1>

      <div className='filter-buttons'>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
        <button onClick={() => setFilter('all')}>All</button>
      </div>

      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </div>
  );
};

export default App;