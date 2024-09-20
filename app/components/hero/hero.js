import React from "react";
import styles from "./hero.module.css";

function Hero({ title }) {
  return (
    <div className={styles.hero}>
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;
