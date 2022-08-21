import Link from "next/dist/client/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.containerHome}>
      <title>Home</title>
      <h1 className={styles.homeTitle}>Which image generator do you want?</h1>

      <div className={styles.buttonsArea}>
        <Link href={`/cat`}>
          <a className={styles.buttons}>Cat</a>
        </Link>
        <Link href={`/fox`}>
          <a className={styles.buttons}>Fox</a>
        </Link>
        <Link href={`/duck`}>
          <a className={styles.buttons}>Duck</a>
        </Link>
      </div>
    </section>
  );
}
