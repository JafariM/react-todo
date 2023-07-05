import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ tableName }) {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.primaryHeader}>{tableName}</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/todo" className={styles.link}>
            Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
