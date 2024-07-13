import React, { Component } from 'react';
import Faq from 'react-faq-component';
import styles from "./FAQ.module.css"

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

export default class FAQ extends Component {
  render() {
    return (
      <div className={styles["content"]}>
        <Faq
          data={data}
          styles={{
            bgColor: 'white',
            //titleTextColor: "blue",
            titleTextSize: '48px',
            //rowTitleColor: 'blue',
            //rowTitleTextSize: 'medium',
            rowContentColor: '#747474',
            rowContentTextSize: '16px',
            rowContentPaddingTop: '10px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingLeft: '50px',
            rowContentPaddingRight: '150px',
            arrowColor: "red",
            transitionDuration: "1s",
            timingFunc: "ease"
          }}
        />
      </div>
    )
  }
}