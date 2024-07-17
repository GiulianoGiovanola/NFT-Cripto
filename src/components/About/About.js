import React from "react";
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles["contentgeneral"]}>
      <article id="informacion" className={styles["content"]}>
        <h1 id="About">Unveiling Pink Rabbit: The Journey, Creation, and Vision</h1>
        <p>
          Pink Rabbit is an innovative NFT project inspired by the charm and whimsy of a playful rabbit. The creation process involved a team of talented digital artists and blockchain developers who collaborated to bring this unique digital asset to life. Utilizing advanced design software and smart contract technology, the team ensured that each Pink Rabbit NFT is not only visually captivating but also secure and verifiable on the blockchain. The objective of Pink Rabbit is to offer collectors a delightful and rare digital art piece while promoting the creative potential of NFTs in the digital art community.
        </p>
      </article>
    </section>
  );
};

export default About;
