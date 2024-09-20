// components/Navigation.js
import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/link1">Link 1</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/link2">Link 2</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/link3">Link 3</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/link4">Link 4</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/link5">Link 5</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
