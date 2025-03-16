import React from "react";
import Head from "./src/(1)head";
import Products from "./src/(2)products";
import Gallery from "./src/(3)gallery";
import App from "./src/(4)appSection";
import Products2 from "./src/(5)productsTwo";
import Cards from "./src/(6)cards"
import Forms from "./src/(7)form"
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
      <Forms />
      <Footer />
    </div>
  );
}
