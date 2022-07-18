import React from "react";
import Slideshow from "./SlideShow";
import styles from "./HomePage.module.css";
import ProductGroup from "./ProductGroup";
import Offer from "./Offer";
import Advertisment from "./Advertisment";
import Footer from "./Footer";
import Search from "../cart/Search";

function HomePage() {
  return (
    <div className={styles.container}>
      <ProductGroup />
      <div className={styles.search}>
        <Search />
      </div>
      <Slideshow />
      <Offer />
      <Advertisment />
    </div>
  );
}

export default HomePage;
