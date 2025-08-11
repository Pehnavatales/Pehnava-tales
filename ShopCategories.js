// src/components/ShopCategories.js
import React from "react";

const categories = [
  { id: 1, name: "Lehenga", startingPrice: 2599, img: "https://example.com/lehenga.jpg" },
  { id: 2, name: "Kurtis", startingPrice: 799, img: "https://example.com/kurtis.jpg" },
  { id: 3, name: "Co-ord Sets", prices: [899, 999, 1299, 1499], img: "https://example.com/coordsets.jpg" },
  { id: 4, name: "Sarees", prices: [999, 1299, 1499, 1999, 2499, 2999], img: "https://example.com/sarees.jpg" },
  { id: 5, name: "Anarkali Suits", startingPrice: 799, img: "https://example.com/anarkali.jpg" },
  { id: 6, name: "Gowns", startingPrice: 1500, img: "https://example.com/gowns.jpg" },
  { id: 7, name: "Dresses", startingPrice: 1200, img: "https://example.com/dresses.jpg" },
];

export default function ShopCategories() {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", margin: "40px 0" }}>
      {categories.map(({ id, name, startingPrice, prices, img }) => (
        <div key={id} style={{ width: "220px", textAlign: "center", cursor: "pointer", boxShadow: "0 0 8px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
          <img src={img} alt={name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <h3 style={{ margin: "10px 0" }}>{name}</h3>
          {prices ? (
            <p>Price Range: {prices.map((p, i) => (i === prices.length - 1 ? `₹${p}` : `₹${p}, `))}</p>
          ) : (
            <p>Starting from ₹{startingPrice}</p>
          )}
        </div>
      ))}
    </section>
  );
}
