

import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const stockClass = product.inStock ? 'inStockClass' : 'outOfStockClass';

  return (
    <div className={`card ${stockClass}`}>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <h4>{product.inStock ? 'In Stock' : 'Out of Stock'}</h4>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
