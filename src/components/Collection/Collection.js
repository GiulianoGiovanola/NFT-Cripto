import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Collection.module.css"


const Collection = ({ dataimg }) => {
  
  return (
    <>
    <Marquee gradient={false}>
      {dataimg.map((img, index) => {
        return (<img className={styles["imgNFT"]} src={img.src} alt={img.alt} key={index} />);
      })}
    </Marquee>
    <Marquee gradient={false} direction={"right"}>
    {dataimg.map((img, index) => {
      return (<img className={styles["imgNFT"]} src={img.src} alt={img.alt} key={index} />);
    })}
  </Marquee>
    </>
  );
};

export default Collection;
