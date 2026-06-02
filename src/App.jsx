import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Must match test's sampleProducts exactly
const initialProducts = [
  { id: 1, name: "Laptop",  price: "$999", inStock: true },
  { id: 2, name: "Phone",   price: "$699", inStock: false },
  { id: 3, name: "Tablet",  price: "$499", inStock: true },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  // Remove product by id
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) => {
    if (filter === "inStock") return p.inStock;
    if (filter === "outOfStock") return !p.inStock;
    return true;
  });

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Product Dashboard</h1>

      <Stack direction="row" spacing={2} style={{ marginBottom: "1.5rem" }}>
        <Button variant={filter === "all" ? "contained" : "outlined"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "inStock" ? "contained" : "outlined"} color="success" onClick={() => setFilter("inStock")}>In Stock</Button>
        <Button variant={filter === "outOfStock" ? "contained" : "outlined"} color="error" onClick={() => setFilter("outOfStock")}>Out of Stock</Button>
      </Stack>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
}

export default App;
