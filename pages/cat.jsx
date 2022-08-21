/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useState } from "react";

// Imported Asset's
import styles from "../styles/Cat.module.css";

export default function catPage() {
  const [cats, setCats] = useState([]);

  const getDataFromApi = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setCats(data[0].url));
  };

  return (
    <div className={styles.container}>
      <title>Cat Page</title>
      <h1 className={styles.title}>Cat Images Generator!</h1>

      <div className={styles.buttonsArea}>
        <button onClick={getDataFromApi} className={styles.generateButton}>
          Generate!
        </button>

        <Link href={`/`}>
          <a className={styles.returnButton}>Return</a>
        </Link>
      </div>

      <div className={styles.imageGeneratedArea}>
        <img src={cats} />
      </div>
    </div>
  );
}
