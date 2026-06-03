import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div>
      <div className={styles.card}>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
        <button onClick={() => removeProduct(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default ProductCard;