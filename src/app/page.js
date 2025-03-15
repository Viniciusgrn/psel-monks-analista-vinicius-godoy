import Desk from "./src/Desk";
import React from "react";
import Head from "./src/head";
import Products from "./src/(2)products";
import Gallery from "./src/(3)gallery";
import App from "./src/(4)appSection";
import Products2 from "./src/(5)productsTwo";
import Cards from "./src/(6)cards"
import Footer from "./src/(8)footer"

export default function Home() {
  return (
    <div>
      <Head />
      <Products />
      <Gallery />
      <App/>
      <Products2 />
      <Cards />
      <Footer />
    </div>
  );
}
