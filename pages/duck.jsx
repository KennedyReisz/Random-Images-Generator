/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useState } from "react";

// Imported Asset's
import styles from "../styles/Duck.module.css";

export default function catPage() {
  const [duck, setDuck] = useState([]);

  const getDataFromApi = () => {
    fetch("https://random-duck.api.stdlib.com/api@1.2.1/quack/gif/")
      .then((response) => response.json())
      .then((data) => setDuck(data.url));
  };

  return (
    <div className={styles.container}>
      <title>Duck Page</title>
      <h1 className={styles.title}>Duck Images Generator!</h1>

      <div className={styles.buttonsArea}>
        <button onClick={getDataFromApi} className={styles.generateButton}>
          Generate!
        </button>

        <Link href={`/`}>
          <a className={styles.returnButton}>Return</a>
        </Link>
      </div>

      <div className={styles.imageGeneratedArea}>
        <img src={duck} />
      </div>
    </div>
  );
}
