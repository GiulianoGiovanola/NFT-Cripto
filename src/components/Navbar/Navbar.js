import React from "react";
import styles from "./Navbar.module.css";
import WalletButton from "../WalletButton/WalletButton";

const Navbar = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["divheader"]}>
          <div>
            <img
              src="assets/logo.png"
              width=""
              height=""
              alt="logo-persona"
            />
          </div>
          <div className={styles["containeroptions"]}>
            <nav>
              <ul className={styles["intro"]}>
                <li>
                  <a href="#About" className={styles["options"]}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#Mint" className={styles["options"]}>
                    Mint
                  </a>
                </li>
                <li>
                  <a href="#FAQ" className={styles["options"]}>
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            <WalletButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
