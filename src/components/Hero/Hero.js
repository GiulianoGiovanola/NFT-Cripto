import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["carruselprincipal"]} >
        <article>
            <div>
                <div className={styles["containertitulo"]}>
                    <h1 className={styles["titulo"]}>PINK</h1>
                    <img src="assets/logo.png" width="" height="" alt="logo-persona" />
                    <h1 className={styles["titulo"]}>RABBIT</h1>
                </div>
                <div>
                    <a className={styles["discord"]}>JOIN DISCORD</a>
                </div>
                {/*<p>
                    Our ships have
                    <a href="contact.html">completed</a>
                    their scan of the area and found nothing. If the
                    <a href="contact.html">Millenium Falcon</a>
                    went into light-speed, it'll be on the other side of the galaxy by
                    now. He says he's the
                    <a href="contact.html">property</a>
                    of Obi-Wan Kenobi, a resident of these parts. And it's a private
                    message for him.
                </p>
                <div>
                    <a className="boton" href="works.html">SELECTED WORKS</a>
                    <a className="boton2" href="about.html">MORE ABOUT ME</a>
                </div>*/}
            </div>
        </article>
    </section>
  );
};

export default Hero;
