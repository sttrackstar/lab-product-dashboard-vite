import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onRemove }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default ProductList;