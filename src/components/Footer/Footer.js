import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div>
          <p>
            &copy; 2024 Pink Rabbit. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
