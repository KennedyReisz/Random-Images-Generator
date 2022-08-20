/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useState } from "react";

// Imported Asset's
import styles from "../styles/Fox.module.css";

export default function foxPage() {
  const [fox, setFox] = useState([]);

  const getDataFromApi = () => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((data) => setFox(data.image));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fox Images Generator!</h1>

      <div className={styles.buttonsArea}>
        <button onClick={getDataFromApi} className={styles.generateButton}>
          Generate!
        </button>

        <a className={styles.returnButton} href="/">Return</a>
      </div>

      <div className={styles.imageGeneratedArea}>
        <img src={fox} />
      </div>
    </div>
  );
}
