// src/components/BannerSlider.js
import React from "react";

export default function BannerSlider() {
  // Static banners with images and text
  const banners = [
    { id: 1, img: "https://example.com/banner1.jpg", text: "Any 3 Short Kurtis – ₹999" },
    { id: 2, img: "https://example.com/banner2.jpg", text: "Any 2 Long Kurtis – ₹1199" },
    { id: 3, img: "https://example.com/banner3.jpg", text: "Bridal Lehengas Starting ₹5999" }, // optional, you said remove
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      {banners.map((banner) => (
        <div key={banner.id} style={{ position: "relative" }}>
          <img src={banner.img} alt={banner.text} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: "30px", left: "30px", color: "#fff", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px 20px", borderRadius: "6px", fontSize: "24px", fontWeight: "bold" }}>
            {banner.text}
          </div>
        </div>
      ))}
    </div>
  );
}
