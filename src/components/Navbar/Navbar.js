import React from "react";
import styles from "./Navbar.module.css";
import WalletButton from "../WalletButton/WalletButton";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="divheader">
          <div>
            <a>
              <img
                src="assets/logo.png"
                width=""
                height=""
                alt="logo-persona"
              />
            </a>
          </div>
          <nav className="intro">
            <ul>
              <li>
                <a href="index.html">Intro</a>
              </li>
              <li>
                <a href="works.html">Works</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <WalletButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
