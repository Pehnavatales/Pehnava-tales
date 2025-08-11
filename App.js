// src/App.js
import React from "react";
import Header from "./components/Header";
import BannerSlider from "./components/BannerSlider";
import ShopCategories from "./components/ShopCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BannerSlider />
        <ShopCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
