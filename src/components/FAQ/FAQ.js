import React, { Component } from 'react';
import Faq from 'react-faq-component';
import styles from "./FAQ.module.css"

const data = {
  title: "How can we help?",
  rows: [
    {
      title: "What is Pink Rabbit NFT?",
      content: "Pink Rabbit is a one-of-a-kind NFT depicting a digitally designed pink rabbit. Each Pink Rabbit token is backed by high-quality digital art and is part of a limited collection, making it a coveted piece within the NFT space."
    },
    {
      title: "What is the Pink Rabbit NFT release date?",
      content: "The Pink Rabbit NFT will be released on April 27, 2025 and is available for purchase from then on."
    },
    {
      title: "What are the main features of Pink Rabbit NFT?",
      content: "Pink Rabbit is an exclusive NFT backed by high-quality digital art, designed for collectors who value originality and scarcity. Each token features unique digital art created by leading artists, guaranteeing its authenticity and artistic value. Featuring a limited edition, Pink Rabbit was initially released on July 1, 2023, making it a sought-after piece in the NFT world, with plans for future releases based on demand and the popularity of the project."
    },
    {
      title: "Where can I learn more about Pink Rabbit NFT?",
      content: "For more details about Pink Rabbit NFT, including news and future releases, you can visit our social media and OpenSea where the NFT will be launched."
    }]
}

export default class FAQ extends Component {
  render() {
    return (
      <div id="FAQ" className={styles["content"]}>
        <Faq
          data={data}
          styles={{
            bgColor: '#ff1e4a',
            titleTextColor: "white",
            titleTextSize: '48px',
            rowTitleColor: '#f1f1f1',
            rowTitleTextWeight: '600',
            //rowTitleTextSize: 'medium',
            rowContentColor: '#e1e1e1',
            rowContentTextSize: '16px',
            rowContentPaddingTop: '10px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingLeft: '50px',
            rowContentPaddingRight: '150px',
            arrowColor: "white",
            transitionDuration: "1s",
            timingFunc: "ease"
          }}
        />
      </div>
    )
  }
}