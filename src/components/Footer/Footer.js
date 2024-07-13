import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["content has-text-centered"]}>
          <p>
            &copy; 2024 Pink Rabbit NFT. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
