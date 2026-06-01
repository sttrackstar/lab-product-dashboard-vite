import React from 'react';


import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return (
      <div id='product-list'>
        <p> Sorry, no products are available right now! Please check back later.</p>
      </div>
    );
  }

  return (
    <div id='product-list'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default ProductList;