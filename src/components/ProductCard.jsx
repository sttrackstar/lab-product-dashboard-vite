import React from "react";
import styles from "../styles/ProductCard.module.css";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

function ProductCard({ product, onRemove }) {
  const { id, name, price, inStock } = product;

  return (
    // "outOfStockClass" is what the test checks for
    <div className={`${styles.card} ${!inStock ? "outOfStockClass" : ""}`}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>{price}</p>

      <Chip
        label={inStock ? "In Stock" : "Out of Stock"}
        color={inStock ? "success" : "error"}
        size="small"
        style={{ marginBottom: "0.8rem" }}
      />

      {/* Remove button — required by test */}
      <div>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => onRemove(id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;