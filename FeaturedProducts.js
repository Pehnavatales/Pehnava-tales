// src/components/FeaturedProducts.js
import React from "react";

const featured = [
  { id: 1, name: "Elegant Short Kurti", price: 999, img: "https://example.com/shortkurti1.jpg" },
  { id: 2, name: "Classic Long Kurti", price: 1199, img: "https://example.com/longkurti1.jpg" },
  { id: 3, name: "Stylish Saree", price: 1499, img: "https://example.com/saree1.jpg" },
  // add more as needed
];

export default function FeaturedProducts() {
  return (
    <section style={{ padding: "0 20px", marginBottom: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#d77a7a" }}>Featured Products</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {featured.map(({ id, name, price, img }) => (
          <div key={id} style={{ width: "200px", boxShadow: "0 0 6px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
            <img src={img} alt={name} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            <div style={{ padding: "10px" }}>
              <h3>{name}</h3>
              <p style={{ color: "#d77a7a", fontWeight: "bold" }}>₹{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

