// src/components/Header.js
import React from "react";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#f9f1ec", alignItems: "center" }}>
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "#d77a7a" }}>Pehnava Tales</div>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <input type="text" placeholder="Search..." style={{ padding: "5px 10px", marginRight: "20px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <FaHeart size={24} style={{ marginRight: "15px", cursor: "pointer" }} title="Wishlist" />
        <FaShoppingCart size={24} style={{ marginRight: "15px", cursor: "pointer" }} title="Cart" />
        <FaUserCircle size={28} style={{ cursor: "pointer" }} title="My Account" />
      </nav>
    </header>
  );
}
