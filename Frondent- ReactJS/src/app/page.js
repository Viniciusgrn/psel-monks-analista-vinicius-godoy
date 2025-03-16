import React from "react";
import Head from "./src/header";
import Products from "./src/products";
import Gallery from "./src/gallery";
import App from "./src/appSection";
import Products2 from "./src/productsTwo";
import Cards from "./src/cards"
import Forms from "./src/form"
import Footer from "./src/footer"

export default function Home() {
  return (
    <div style={{ backgroundColor: "#faf4e3" }}>
      <Head />
      <Products />
      <Gallery />
      <App/>
      <Products2 />
      <Cards />
      <Forms />
      <Footer />
    </div>
  );
}
