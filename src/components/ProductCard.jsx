import React from 'react';

import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={`${styles.productCard} ${!product.inStock ? 'outOfStockClass' : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;